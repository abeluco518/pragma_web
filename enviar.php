<?php
// Rep el formulari de contacte (contacte.html i portada) i l'envia per correu.
// Hostinger: mail() funciona sense configuració. No desa res al servidor ni escriu logs
// (el missatge pot contenir dades de salut).
const DESTI = 'info@institutpragma.com';

header('Content-Type: application/json; charset=utf-8');
function fi(bool $ok, int $codi = 200): void { http_response_code($codi); echo json_encode(['ok' => $ok]); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fi(false, 405);
if (!empty($_POST['web'])) fi(true); // camp trampa (honeypot): als bots els diem que ha anat bé

$camps = [
  'nom' => 'Nom', 'cognoms' => 'Cognoms', 'telefon' => 'Telèfon', 'email' => 'Correu electrònic',
  'preferencia_contacte' => 'Preferència de contacte', 'per_a_qui' => 'Per a qui busca ajuda',
  'edat' => 'Edat aproximada', 'servei' => "Servei d'interès", 'centre' => 'Centre', 'missatge' => 'Missatge',
];
$d = [];
foreach ($camps as $k => $_) {
  $d[$k] = trim(mb_substr((string)($_POST[$k] ?? ''), 0, $k === 'missatge' ? 5000 : 200));
}
$email = filter_var($d['email'], FILTER_VALIDATE_EMAIL); // també bloqueja salts de línia (injecció de capçaleres)
if ($d['nom'] === '' || $d['missatge'] === '' || !$email || empty($_POST['privacitat'])) fi(false, 400);

$host = preg_replace('/^www\./i', '', (string)($_SERVER['HTTP_HOST'] ?? ''));
if (!preg_match('/^[a-z0-9.-]+$/i', $host)) $host = 'institutpragma.com';

$nom = preg_replace('/[\r\n]+/', ' ', trim($d['nom'] . ' ' . $d['cognoms']));
$cos = '';
foreach ($camps as $k => $etiqueta) if ($d[$k] !== '') $cos .= "$etiqueta: {$d[$k]}\n";

$capcaleres = [
  'From: ' . mb_encode_mimeheader('Web Grup Pragma', 'UTF-8') . " <no-reply@$host>",
  'Reply-To: ' . mb_encode_mimeheader($nom, 'UTF-8') . " <$email>",
  'Content-Type: text/plain; charset=UTF-8',
];
$enviat = mail(DESTI, mb_encode_mimeheader("Nova consulta web – $nom", 'UTF-8'), $cos, implode("\r\n", $capcaleres));
fi($enviat, $enviat ? 200 : 500);
