<?php
// Copia aquest fitxer com a correu-config.php AL SERVIDOR (Hostinger) i omple 'clau'.
// No pugis correu-config.php a git (és al .gitignore).
//
// Google Workspace: 'clau' NO és la contrasenya normal, sinó una "contrasenya d'aplicació":
//   1. Compte info@institutpragma.com → myaccount.google.com → Seguretat → activar la verificació en 2 passos.
//   2. myaccount.google.com/apppasswords → crear-ne una (nom: "Web Pragma") → copiar els 16 caràcters, SENSE espais.
//   Si no apareix l'opció, l'administrador de Workspace ha de permetre-la (Admin console → Seguretat → Autenticació).
return [
  'host'   => 'smtp.gmail.com',
  'port'   => 465,
  'usuari' => 'info@institutpragma.com',   // ha de ser un compte real (no un àlies ni un grup)
  'clau'   => 'POSA_AQUI_LA_CONTRASENYA_D_APLICACIO',
];
