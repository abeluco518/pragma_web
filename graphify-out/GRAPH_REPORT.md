# Graph Report - Claude  (2026-09-11)

## Corpus Check
- 52 files · ~70,882 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 135 nodes · 186 edges · 25 communities (10 shown, 14 thin omitted)
- Extraction: 68% EXTRACTED · 32% INFERRED · 0% AMBIGUOUS · INFERRED: 60 edges (avg confidence: 0.82)
- Token cost: 349,955 input · 0 output

## Community Hubs (Navigation)
- Front-end JS Utilities
- Pragma Clínic Services
- Pragma Institut Services
- Site Interior Photography
- Site Infra & Legal Pages
- Study & Consult Imagery
- Team & Methodology
- Clinic Service Pages
- Group & Social Skills Therapy
- Clinical & Play Psychology
- Speech Therapy
- Team Member: Andrea Martínez
- Team Member: Anna Cantudo
- Team Member: Anna De Pablos
- Team Member: Enya Panadero
- Team Member: Jose Pérez
- Team Member: Laia Pons
- Team Member: Laia Salas
- Team Member: Maria Carrillo
- Team Member: Maria De Pablo
- Team Member: Maria Rodríguez
- Crawl Directives
- Speech Therapy SEO Data
- Educational Support Pages

## God Nodes (most connected - your core abstractions)
1. `boot()` - 22 edges
2. `Pragma Institut` - 16 edges
3. `Pragma Clínic` - 14 edges
4. `escHTML()` - 12 edges
5. `mountContactBits()` - 10 edges
6. `clearManaged()` - 9 edges
7. `Grup Pragma` - 8 edges
8. `Psicologia clínica` - 6 edges
9. `Guia d'edició de la web (Website Editing Guide)` - 6 edges
10. `Derivació interna` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Procés UAD (sis passos)` --conceptually_related_to--> `Metodologia: mirem la persona, no només el símptoma`  [INFERRED]
  uad.html → index.html
- `Formulari de contacte` --semantically_similar_to--> `Orientador de serveis`  [INFERRED] [semantically similar]
  contacte.html → index.html
- `Derivació interna` --semantically_similar_to--> `Coordinació psicologia–psiquiatria`  [INFERRED] [semantically similar]
  index.html → clinic.html
- `Anna de Pablos` --conceptually_related_to--> `Psicologia clínica`  [INFERRED]
  nosaltres.html → clinic.html
- `Laia Pons` --conceptually_related_to--> `Psicologia clínica`  [INFERRED]
  nosaltres.html → clinic.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Derivació interna entre centres sense recomençar** — institut_pragma_institut, clinic_pragma_clinic, uad_uad, index_derivacio_interna [EXTRACTED 0.90]
- **Orientació de l'usuari cap al servei adequat** — index_orientador, contacte_formulari_contacte, institut_pragma_institut, clinic_pragma_clinic, uad_uad [INFERRED 0.80]
- **Equip multidisciplinari sota un mateix criteri** — index_equip_multidisciplinari, institut_logopedia, institut_psicopedagogia, clinic_psicologia_clinica, clinic_psiquiatria [INFERRED 0.75]
- **Pragma Institut development and learning services** — serveis_logopedia_speech_therapy, serveis_psicopedagogia_educational_psychology, serveis_psicologia_child_youth_psychology, serveis_reforc_escolar_school_support, serveis_habilitats_socials_social_skills_groups [INFERRED 0.90]
- **Pragma Clínic clinical services** — serveis_psicologia_clinica_clinical_psychology, serveis_psiquiatria_psychiatry, serveis_grups_terapeutics_therapeutic_groups [INFERRED 0.90]
- **Grup Pragma site legal framework** — legal_avis_legal_legal_notice, legal_politica_privacitat_privacy_policy, legal_politica_cookies_cookie_policy [EXTRACTED 0.90]
- **Clinic Consultation Space Photo Set** — assets_img_clinic_room_clinic_room, assets_img_clinic_wide_clinic_wide, assets_img_hero_portrait_hero_portrait [INFERRED 0.80]
- **Institute Learning Space Photo Set** — assets_img_institut_room_institut_room, assets_img_institut_wide_institut_wide, assets_img_uad_materials_uad_materials [INFERRED 0.75]
- **Unified Site Photography Style** — assets_img_clinic_room_clinic_room, assets_img_clinic_wide_clinic_wide, assets_img_hero_detail_hero_detail, assets_img_hero_portrait_hero_portrait, assets_img_institut_room_institut_room, assets_img_institut_wide_institut_wide, assets_img_nosaltres_archive_nosaltres_archive, assets_img_uad_materials_uad_materials [INFERRED 0.70]
- **Clinical and Educational Service Illustration Set** — assets_img_serv_grups_group_therapy_room_photo, assets_img_serv_habilitats_social_skills_circle_photo, assets_img_serv_logopedia_speech_therapy_tools_photo, assets_img_serv_psicologia_clinica_therapy_corner_photo, assets_img_serv_psicologia_play_therapy_table_photo, assets_img_serv_psicopedagogia_study_desk_photo, assets_img_serv_psiquiatria_consultation_desk_photo, assets_img_serv_reforc_escolar_study_desk_photo [INFERRED 0.80]
- **Team Member Portrait Photo Set** — assets_img_team_andrea_martinez_andrea_martinez_portrait, assets_img_team_anna_cantudo_anna_cantudo_portrait, assets_img_team_anna_de_pablos_anna_de_pablos_portrait, assets_img_team_enya_panadero_enya_panadero_portrait, assets_img_team_jose_perez_jose_perez_portrait, assets_img_team_laia_pons_laia_pons_portrait, assets_img_team_laia_salas_laia_salas_portrait, assets_img_team_maria_carrillo_maria_carrillo_portrait, assets_img_team_maria_de_pablo_maria_de_pablo_portrait, assets_img_team_maria_rodriguez_maria_rodriguez_portrait [INFERRED 0.85]

## Communities (25 total, 14 thin omitted)

### Community 0 - "Front-end JS Utilities"
Cohesion: 0.16
Nodes (31): boot(), clearManaged(), escHTML(), iconChat(), iconClock(), iconMail(), iconPhone(), iconPin() (+23 more)

### Community 1 - "Pragma Clínic Services"
Cohesion: 0.21
Nodes (16): Pàgina d'error 404, Ajudes i suport (vessant social), Coordinació psicologia–psiquiatria, Grups terapèutics, Pragma Clínic, Psicologia clínica, Psiquiatria, Treball terapèutic amb famílies (+8 more)

### Community 2 - "Pragma Institut Services"
Cohesion: 0.17
Nodes (16): Formulari de contacte, Orientador de serveis, Grups d'habilitats socials, Logopèdia, Pragma Institut, Psicologia infantil i juvenil, Psicopedagogia i reeducacions, Reforç escolar (+8 more)

### Community 3 - "Site Interior Photography"
Cohesion: 0.25
Nodes (9): Favicon Logo (Italic P Monogram), Clinic Consultation Room (Detail), Clinic Consultation Room (Wide), Hero Detail (Hands Arranging Wooden Tiles), Hero Portrait (Reading Nook Armchair), Institut Room (Shelving Corner with Child Chair), Institut Room (Wide, Children's Learning Space), Nosaltres Archive (Bookshelf of Box Files) (+1 more)

### Community 4 - "Site Infra & Legal Pages"
Cohesion: 0.28
Nodes (9): Guia d'edició de la web (Website Editing Guide), Formspree form endpoint, Hostinger (web hosting), lib/manifest.js content manifest, Avís legal (Legal Notice), Política de cookies (Cookie Policy), Google Fonts (external font provider), Política de privadesa (Privacy Policy) (+1 more)

### Community 5 - "Study & Consult Imagery"
Cohesion: 0.40
Nodes (6): Psychopedagogy Service, Psychopedagogy Study Desk Photo, Psychiatry Consultation Desk Photo, Psychiatry Service, Academic Support (Reforç Escolar) Service, Academic Support Study Desk Photo

### Community 6 - "Team & Methodology"
Cohesion: 0.40
Nodes (5): Redirecció Equip → Qui som, Equip multidisciplinari, Metodologia: mirem la persona, no només el símptoma, Treball en xarxa (EAP, CSMIJ), Qui som (projecte i equip Grup Pragma)

### Community 7 - "Clinic Service Pages"
Cohesion: 0.50
Nodes (5): Grups terapèutics (Therapeutic Groups), Grups d'habilitats socials (Social Skills Groups), Psicologia infantil i juvenil (Child and Youth Psychology), Psicologia clínica (Clinical Psychology), Psiquiatria (Psychiatry)

### Community 8 - "Group & Social Skills Therapy"
Cohesion: 0.67
Nodes (4): Group Therapy Room Photo, Group Therapy Service, Social Skills Chair Circle Photo, Social Skills Training Service

### Community 9 - "Clinical & Play Psychology"
Cohesion: 0.50
Nodes (4): Clinical Psychology Service, Clinical Psychology Therapy Corner Photo, Play Therapy Table Photo, Psychology Service

## Knowledge Gaps
- **50 isolated node(s):** `Equip multidisciplinari`, `Treball en xarxa (EAP, CSMIJ)`, `Formulari de contacte`, `Ajudes i suport (vessant social)`, `Àrea d'empresa` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 51 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Pragma Institut` connect `Pragma Institut Services` to `Pragma Clínic Services`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `Pragma Clínic` connect `Pragma Clínic Services` to `Pragma Institut Services`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `Derivació interna` connect `Pragma Clínic Services` to `Pragma Institut Services`, `Team & Methodology`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Are the 20 inferred relationships involving `boot()` (e.g. with `initAnchors()` and `initContactForm()`) actually correct?**
  _`boot()` has 20 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Equip multidisciplinari`, `Treball en xarxa (EAP, CSMIJ)`, `Formulari de contacte` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._