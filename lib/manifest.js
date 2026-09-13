/* =============================================================================
   GRUP PRAGMA — dades editables del lloc
   -----------------------------------------------------------------------------
   Fitxer únic per canviar continguts habituals: serveis, equip, contacte,
   ubicació, testimonis i orientador.
   · Tot el text visible viu també a l'HTML (perquè funcioni sense JS).
   · Per afegir CASTELLÀ: duplica els blocs amb clau "es" i canvia lang.
   · Valors que no tenim: "[PENDENT]". No inventar dades.
   ============================================================================= */
(function () {
  "use strict";

  window.__PRAGMA__ = {
    lang: "ca",

    brand: {
      name: "Grup Pragma",
      place: "Molins de Rei, Barcelona",
      since: 2005,
      yearsLabel: "+20 anys"
    },

    /* --- Contacte (dades reals) --- */
    contact: {
      phone: "936 68 99 74",
      phoneHref: "tel:+34936689974",
      email: "info@institutpragma.com",
      whatsapp: "",                 // p. ex. "https://wa.me/34936689974"
      scheduleUrl: "",              // enllaç a cita en línia si n'hi ha
      formEndpoint: "",             // URL del servei de formularis (buit = mode demostració)
      hours: "Dilluns a divendres, 9.00–20.30 h · Dissabte, 9.00–12.00 h · Diumenge, tancat"
    },

    /* --- Seu (de moment, una de compartida) --- */
    centers: [
      {
        id: "principal",
        name: "Grup Pragma",
        branch: "Molins de Rei",
        address: "Passeig del Terraplè, 40 · 08750 Molins de Rei, Barcelona",
        hours: "Dl a Dv, 9.00–20.30 h · Ds, 9.00–12.00 h · Dg, tancat",
        mapUrl: "https://maps.google.com/?q=Passeig+del+Terrapl%C3%A8+40+Molins+de+Rei"
      }
    ],

    /* --- Serveis, per àrea --- */
    services: {
      institut: [
        { slug: "logopedia",        name: "Logopèdia",                    desc: "Avaluació i intervenció en parla, llenguatge, veu, lectura i escriptura." },
        { slug: "psicopedagogia",   name: "Psicopedagogia",               desc: "Reeducacions psicopedagògiques i suport a l'aprenentatge escolar." },
        { slug: "psicologia",       name: "Psicologia infantil i juvenil", desc: "Acompanyament emocional per a infants i adolescents, i orientació a famílies." },
        { slug: "reeducacions",     name: "Reeducacions",                 desc: "Treball individualitzat sobre dificultats específiques d'aprenentatge." },
        { slug: "reforc-escolar",   name: "Reforç escolar",               desc: "Suport a Primària i ESO amb mètode i hàbits d'estudi." },
        { slug: "habilitats-socials", name: "Habilitats socials",         desc: "Grups per treballar la relació amb els altres i la gestió emocional." },
        { slug: "uad",              name: "Avaluació i diagnòstic",  desc: "Procés multidisciplinari d'avaluació, diagnòstic i orientació.", feature: true }
      ],
      clinic: [
        { slug: "psicologia-clinica", name: "Psicologia clínica",   desc: "Psicoteràpia per a adults, adolescents i, quan cal, infància." },
        { slug: "psiquiatria",        name: "Psiquiatria",          desc: "Avaluació diagnòstica i seguiment, amb tractament farmacològic si escau." },
        { slug: "grups-terapeutics",  name: "Grups terapèutics",    desc: "Espais grupals conduïts per professionals per compartir i avançar." },
        { slug: "atencio-familiar",   name: "Atenció familiar",     desc: "Treball terapèutic amb la família com a context de cura." },
        { slug: "coordinacio-clinica", name: "Coordinació clínica", desc: "Psicologia i psiquiatria treballen juntes sobre cada cas." }
      ]
    },

    /* --- Passos de la UAD --- */
    uad: [
      { n: "01", title: "Primera entrevista",       body: "Escoltem la família i la persona. Situem la demanda i acordem com continuar." },
      { n: "02", title: "Avaluació",                body: "Proves i observació segons l'edat i el motiu de consulta, en diverses sessions." },
      { n: "03", title: "Anàlisi multidisciplinària", body: "L'equip posa en comú la informació des de la psicologia, la psicopedagogia i la logopèdia." },
      { n: "04", title: "Diagnòstic i conclusions", body: "Arribem a una comprensió compartida del que passa i del que pot ajudar." },
      { n: "05", title: "Informe",                  body: "Document clar, útil per a la família i per a l'escola o altres serveis." },
      { n: "06", title: "Orientació i seguiment",   body: "Recomanacions concretes i acompanyament per posar-les en marxa." }
    ],

    /* --- Metodologia --- */
    method: [
      { title: "Atenció personalitzada",        body: "Cada procés s'ajusta a la persona i al seu moment, no a l'inrevés." },
      { title: "Equip multidisciplinari",       body: "Psicologia, psicopedagogia, logopèdia, psiquiatria i treball social sota un mateix criteri." },
      { title: "Coordinació entre professionals", body: "Les persones que t'atenen parlen entre elles sobre el teu cas." },
      { title: "Treball amb les famílies",      body: "La família forma part del procés i del canvi." },
      { title: "Coordinació amb l'escola",      body: "Ens comuniquem amb els centres educatius quan ajuda l'infant." },
      { title: "Treball en xarxa",              body: "Amb EAP, CSMIJ i altres serveis del territori." },
      { title: "Derivació interna",             body: "Entre desenvolupament i clínica quan un cas ho necessita, sense començar de zero." },
      { title: "Seguiment continuat",           body: "No tanquem quan marxes: revisem com va evolucionant." }
    ],

    /* --- Equip real. Edita el rol, la branca o afegeix descripció aquí.
       "photo": nom del fitxer a assets/img/ (buit = marcador). --- */
    team: [
      { name: "Anna Cantudo",   role: "Fundadora, codirectora i logopeda", branch: "Institut", photo: "team-anna-cantudo.webp",   areas: "", col: "", desc: "" },
      { name: "Ana Domínguez",  role: "Codirectora i psicòloga clínica",   branch: "Clínic",   photo: "team-ana-dominguez.webp",   areas: "Infància · Adolescència · Adults", col: "", desc: "" },
      { name: "Maria Carrillo", role: "Psicopedagoga",                     branch: "Institut", photo: "team-maria-carrillo.webp",  areas: "", col: "", desc: "" },
      { name: "Laia Salas",     role: "Pedagoga i treballadora social",    branch: "Institut", photo: "team-laia-salas.webp",      areas: "", col: "", desc: "" },
      { name: "Maria de Pablo", role: "Psicòloga clínica i teràpia de parella", branch: "Clínic", photo: "team-maria-de-pablo.webp", areas: "", col: "", desc: "" },
      { name: "Laia Pons",      role: "Psicòloga i neuropsicòloga",        branch: "Clínic",   photo: "team-laia-pons.webp",       areas: "", col: "", desc: "" },
      { name: "Andrea Martínez", role: "Psicopedagoga",                    branch: "Institut", photo: "team-andrea-martinez.webp", areas: "", col: "", desc: "" },
      { name: "Maria Rodríguez", role: "Logopeda",                         branch: "Institut", photo: "team-maria-rodriguez.webp", areas: "", col: "", desc: "" },
      { name: "Enya Panadero",  role: "Psicòloga",                         branch: "Institut", photo: "team-enya-panadero.webp",   areas: "", col: "", desc: "" },
      { name: "Anna de Pablos", role: "Psicòloga clínica",                branch: "Clínic",   photo: "team-anna-de-pablos.webp",  areas: "", col: "", desc: "" },
      { name: "José Pérez",     role: "Psiquiatre i terapeuta de família", branch: "Clínic",   photo: "team-jose-perez.webp",      areas: "", col: "", desc: "" }
    ],

    /* --- Xifres (només reals) --- */
    figures: [
      { num: "+20", label: "anys acompanyant persones i famílies" },
      { num: "11",  label: "professionals a l'equip multidisciplinari" },
      { num: "+7000", label: "pacients atesos" }
    ],

    /* --- Testimonis (placeholders explícits) --- */
    testimonials: [
      { quote: "Testimoni pendent de contingut real.", author: "— Pendent" },
      { quote: "Testimoni pendent de contingut real.", author: "— Pendent" },
      { quote: "Testimoni pendent de contingut real.", author: "— Pendent" }
    ],

    /* --- Orientador: intenció → destí --- */
    orient: {
      targets: {
        institut: { label: "Desenvolupament <em>i aprenentatge</em>", body: "Pel que expliques, encaixa amb l'àrea de desenvolupament, aprenentatge i suport psicològic i educatiu (Pragma Institut).", href: "institut.html" },
        clinic:   { label: "Serveis <em>clínics</em>",   body: "Pel que expliques, encaixa amb l'àrea clínica: psicologia clínica, psiquiatria i salut mental (Pragma Clínic).", href: "clinic.html" },
        uad:      { label: "Avaluació <em>i diagnòstic</em>", body: "Sembla que el primer pas és una avaluació. L'Avaluació i diagnòstic pot ordenar el que està passant.", href: "uad.html" },
        general:  { label: "Contacte <em>general</em>", body: "No passa res per no tenir-ho clar. Escriu-nos i t'orientem cap al lloc on et podrem escoltar.", href: "contacte.html" }
      },
      options: [
        { id: "aprenentatge", label: "Aprenentatge / estudis",      target: "institut" },
        { id: "llenguatge",   label: "Llenguatge / parla",          target: "institut" },
        { id: "comportament", label: "Comportament",                target: "institut" },
        { id: "emocions",     label: "Emocions",                    target: "clinic" },
        { id: "anim",         label: "Ansietat / estat d'ànim",     target: "clinic" },
        { id: "avaluacio",    label: "Avaluació / diagnòstic",      target: "uad" },
        { id: "psiquiatria",  label: "Psiquiatria",                 target: "clinic" },
        { id: "dubte",        label: "No n'estic segur/a",          target: "general" }
      ]
    },

    social: [
      { name: "Instagram", href: "" },
      { name: "LinkedIn",  href: "" }
    ]
  };
})();
