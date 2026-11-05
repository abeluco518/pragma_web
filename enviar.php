<?php
// Rep el formulari de contacte (contacte.html i portada) i l'envia per correu.
// Envia per SMTP amb el buzó real (correu-config.php). No desa res al servidor ni escriu logs
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

$assumpte = mb_encode_mimeheader("Nova consulta web – $nom", 'UTF-8');
$config = is_file(__DIR__ . '/correu-config.php') ? require __DIR__ . '/correu-config.php' : null;

if ($config) {
  // SMTP autenticat amb el buzó real (fiable). Credencials a correu-config.php (no es puja a git).
  $cap = [
    'Date: ' . date('r'),
    'From: ' . mb_encode_mimeheader('Web Grup Pragma', 'UTF-8') . " <{$config['usuari']}>",
    'To: ' . DESTI,
    'Reply-To: ' . mb_encode_mimeheader($nom, 'UTF-8') . " <$email>",
    "Subject: $assumpte",
    'Message-ID: <' . bin2hex(random_bytes(8)) . '@' . $host . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ];
  $missatge = implode("\r\n", $cap) . "\r\n\r\n" . chunk_split(base64_encode($cos));
  $enviat = smtp_envia($config, DESTI, $missatge);
} else {
  // Sense SMTP no enviem: mail() pot dir "ok" i que el hosting el descarti, i el formulari faria creure que ha anat bé.
  error_log('Formulari: falta correu-config.php (copia correu-config.example.php)');
  $enviat = false;
}
fi($enviat, $enviat ? 200 : 500);

// Client SMTP mínim (SSL directe, p. ex. port 465 + AUTH LOGIN). Els errors van al log del servidor, sense contingut del missatge.
function smtp_envia(array $c, string $desti, string $missatge): bool {
  $s = @stream_socket_client(($c['port'] == 465 ? 'ssl://' : '') . $c['host'] . ':' . $c['port'], $en, $es, 15);
  if (!$s) { error_log("SMTP: no connecta ($en $es)"); return false; }
  stream_set_timeout($s, 15);
  $llegeix = function () use ($s) { $r = ''; while (($l = fgets($s, 515)) !== false) { $r .= $l; if (strlen($l) < 4 || $l[3] === ' ') break; } return $r; };
  $ordre = function (string $cmd, string $espera) use ($s, $llegeix) {
    if ($cmd !== '') fwrite($s, $cmd . "\r\n");
    $r = $llegeix();
    if (strpos($r, $espera) !== 0) { error_log('SMTP: ' . ($cmd === '' ? 'salutació' : strtok($cmd, ' ')) . ' -> ' . trim($r)); return false; }
    return true;
  };
  $ok = $ordre('', '220') && $ordre('EHLO ' . ($_SERVER['HTTP_HOST'] ?? 'localhost'), '250')
    && $ordre('AUTH LOGIN', '334') && $ordre(base64_encode($c['usuari']), '334') && $ordre(base64_encode($c['clau']), '235')
    && $ordre('MAIL FROM:<' . $c['usuari'] . '>', '250') && $ordre("RCPT TO:<$desti>", '250') && $ordre('DATA', '354');
  if ($ok) {
    fwrite($s, preg_replace('/^\./m', '..', $missatge) . "\r\n.\r\n");
    $ok = $ordre('', '250');
  }
  fwrite($s, "QUIT\r\n"); fclose($s);
  return $ok;
}
