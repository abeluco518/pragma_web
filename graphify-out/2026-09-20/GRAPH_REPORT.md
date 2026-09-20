# Graph Report - Claude  (2026-09-11)

## Corpus Check
- 59 files · ~216,577 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1305 nodes · 2826 edges · 98 communities (82 shown, 15 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 120 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c338665`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- main.js
- Pragma Institut
- live-browser.js
- Hero Portrait (Reading Nook Armchair)
- Guia d'edició de la web (Website Editing Guide)
- Psychopedagogy Study Desk Photo
- modern-screenshot.umd.js
- Psicologia clínica (Clinical Psychology)
- Group Therapy Room Photo
- Clinical Psychology Service
- Speech Therapy (Logopedia) Service
- Andrea Martinez Portrait
- Anna Cantudo Portrait
- Anna De Pablos Portrait
- Enya Panadero Portrait
- Jose Perez Portrait
- Laia Pons Portrait
- Laia Salas Portrait
- Maria Carrillo Portrait
- Maria De Pablo Portrait
- Maria Rodriguez Portrait
- robots.txt crawl directives
- schema.org MedicalProcedure structured data (Logopèdia)
- Psicopedagogia i reeducacions (Educational Psychology)
- CLAUDE.md
- el
- initPageChat
- mountSvelteComponentVariant
- setLiveState
- renderDesignVisual
- resumeSession
- documentRefForElement
- handleManualEditActivity
- init
- Responsive Design
- connectSSE
- captureElementToBlob
- onboard.md
- new-work.md
- createLiveBrowserDomHelpers
- The Toolkit
- onAnnotDown
- createLiveBrowserSessionState
- handleAccept
- animate.md
- live.md
- Handle `generate`
- Generate Report
- SKILL.md
- cleanup
- New visual work
- optimize.md
- Scan mode (approach C: auto-extract, then confirm descriptive language)
- refreshParamsPanel
- critique.md
- Simplify the Design
- Hardening Dimensions
- handleMouseMove
- clarify.md
- Nielsen's 10 Heuristics
- document.md
- polish.md
- quieter.md
- scheduleAcceptCleanup
- initGlobalBar
- Generate Combined Critique Report
- Init flow
- Common Cognitive Load Violations
- iOS platform
- Operate mode depth (and Read notes)
- Shape
- adapt.native.md
- Android platform
- colorize.md
- Persona-Based Design Testing
- doctor.md
- Extract Flow
- live-setup.md
- syncEditBadgeHitProxies
- Impeccable Asset Producer
- Impeccable Finish Reviewer
- Impeccable Manual Edit Applier
- Generate Report
- Cognitive Load Assessment
- Impeccable Asset Producer
- Impeccable Finish Reviewer
- Impeccable Manual Edit Applier
- handleGo
- live-browser-ignores.js
- Diagnostic Scan
- bolder.md
- /impeccable hooks
- Visualize: Direction Comps & Asset Production
- impeccable
- Impeccable Documenter
- Impeccable Documenter
- Heuristics Scoring Guide

## God Nodes (most connected - your core abstractions)
1. `setLiveState()` - 32 edges
2. `resumeSession()` - 32 edges
3. `connectSSE()` - 31 edges
4. `showToast()` - 30 edges
5. `el()` - 29 edges
6. `initGlobalBar()` - 29 edges
7. `handleKeyDown()` - 27 edges
8. `buildInsertConfigureRow()` - 26 edges
9. `injectSvelteComponentsFromManifest()` - 26 edges
10. `cleanup()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `Derivació interna` --semantically_similar_to--> `Coordinació psicologia–psiquiatria`  [INFERRED] [semantically similar]
  index.html → clinic.html
- `Formulari de contacte` --semantically_similar_to--> `Orientador de serveis`  [INFERRED] [semantically similar]
  contacte.html → index.html
- `Anna de Pablos` --conceptually_related_to--> `Psicologia clínica`  [INFERRED]
  nosaltres.html → clinic.html
- `Laia Pons` --conceptually_related_to--> `Psicologia clínica`  [INFERRED]
  nosaltres.html → clinic.html
- `Maria de Pablo` --conceptually_related_to--> `Psicologia clínica`  [INFERRED]
  nosaltres.html → clinic.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Derivació interna entre centres sense recomençar** — institut_pragma_institut, clinic_pragma_clinic, uad_uad, index_derivacio_interna [EXTRACTED 0.90]
- **Grup Pragma site legal framework** — legal_avis_legal_legal_notice, legal_politica_privacitat_privacy_policy, legal_politica_cookies_cookie_policy [EXTRACTED 0.90]
- **Unified Site Photography Style** — assets_img_clinic_room_clinic_room, assets_img_clinic_wide_clinic_wide, assets_img_hero_detail_hero_detail, assets_img_hero_portrait_hero_portrait, assets_img_institut_room_institut_room, assets_img_institut_wide_institut_wide, assets_img_nosaltres_archive_nosaltres_archive, assets_img_uad_materials_uad_materials [INFERRED 0.70]
- **Equip multidisciplinari sota un mateix criteri** — index_equip_multidisciplinari, institut_logopedia, institut_psicopedagogia, clinic_psicologia_clinica, clinic_psiquiatria [INFERRED 0.75]
- **Institute Learning Space Photo Set** — assets_img_institut_room_institut_room, assets_img_institut_wide_institut_wide, assets_img_uad_materials_uad_materials [INFERRED 0.75]
- **Clinic Consultation Space Photo Set** — assets_img_clinic_room_clinic_room, assets_img_clinic_wide_clinic_wide, assets_img_hero_portrait_hero_portrait [INFERRED 0.80]
- **Clinical and Educational Service Illustration Set** — assets_img_serv_grups_group_therapy_room_photo, assets_img_serv_habilitats_social_skills_circle_photo, assets_img_serv_logopedia_speech_therapy_tools_photo, assets_img_serv_psicologia_clinica_therapy_corner_photo, assets_img_serv_psicologia_play_therapy_table_photo, assets_img_serv_psicopedagogia_study_desk_photo, assets_img_serv_psiquiatria_consultation_desk_photo, assets_img_serv_reforc_escolar_study_desk_photo [INFERRED 0.80]
- **Orientació de l'usuari cap al servei adequat** — index_orientador, contacte_formulari_contacte, institut_pragma_institut, clinic_pragma_clinic, uad_uad [INFERRED 0.80]
- **Team Member Portrait Photo Set** — assets_img_team_andrea_martinez_andrea_martinez_portrait, assets_img_team_anna_cantudo_anna_cantudo_portrait, assets_img_team_anna_de_pablos_anna_de_pablos_portrait, assets_img_team_enya_panadero_enya_panadero_portrait, assets_img_team_jose_perez_jose_perez_portrait, assets_img_team_laia_pons_laia_pons_portrait, assets_img_team_laia_salas_laia_salas_portrait, assets_img_team_maria_carrillo_maria_carrillo_portrait, assets_img_team_maria_de_pablo_maria_de_pablo_portrait, assets_img_team_maria_rodriguez_maria_rodriguez_portrait [INFERRED 0.85]
- **Pragma Clínic clinical services** — serveis_psicologia_clinica_clinical_psychology, serveis_psiquiatria_psychiatry, serveis_grups_terapeutics_therapeutic_groups [INFERRED 0.90]
- **Pragma Institut development and learning services** — serveis_logopedia_speech_therapy, serveis_psicopedagogia_educational_psychology, serveis_psicologia_child_youth_psychology, serveis_reforc_escolar_school_support, serveis_habilitats_socials_social_skills_groups [INFERRED 0.90]

## Communities (98 total, 15 thin omitted)

### Community 0 - "main.js"
Cohesion: 0.16
Nodes (31): boot(), clearManaged(), escHTML(), iconChat(), iconClock(), iconMail(), iconPhone(), iconPin() (+23 more)

### Community 1 - "Pragma Institut"
Cohesion: 0.09
Nodes (37): Pàgina d'error 404, Ajudes i suport (vessant social), Coordinació psicologia–psiquiatria, Grups terapèutics, Pragma Clínic, Psicologia clínica, Psiquiatria, Treball terapèutic amb famílies (+29 more)

### Community 2 - "live-browser.js"
Cohesion: 0.05
Nodes (63): applyGlobalBarLabelState(), applyParamValue(), applyPlaceholderSizingStyles(), buildColorModels(), buildInsertPlaceholderSnapshotFromDom(), buildPickedAnchorSnapshot(), buildPlaceholderResizeHandles(), buildTypographyModels() (+55 more)

### Community 3 - "Hero Portrait (Reading Nook Armchair)"
Cohesion: 0.25
Nodes (9): Favicon Logo (Italic P Monogram), Clinic Consultation Room (Detail), Clinic Consultation Room (Wide), Hero Detail (Hands Arranging Wooden Tiles), Hero Portrait (Reading Nook Armchair), Institut Room (Shelving Corner with Child Chair), Institut Room (Wide, Children's Learning Space), Nosaltres Archive (Bookshelf of Box Files) (+1 more)

### Community 4 - "Guia d'edició de la web (Website Editing Guide)"
Cohesion: 0.28
Nodes (9): Guia d'edició de la web (Website Editing Guide), Formspree form endpoint, Hostinger (web hosting), lib/manifest.js content manifest, Avís legal (Legal Notice), Política de cookies (Cookie Policy), Google Fonts (external font provider), Política de privadesa (Privacy Policy) (+1 more)

### Community 5 - "Psychopedagogy Study Desk Photo"
Cohesion: 0.40
Nodes (6): Psychopedagogy Service, Psychopedagogy Study Desk Photo, Psychiatry Consultation Desk Photo, Psychiatry Service, Academic Support (Reforç Escolar) Service, Academic Support Study Desk Photo

### Community 6 - "modern-screenshot.umd.js"
Cohesion: 0.09
Nodes (55): ae(), be(), bt(), Ce(), s(), Ct(), de(), dt() (+47 more)

### Community 7 - "Psicologia clínica (Clinical Psychology)"
Cohesion: 0.50
Nodes (5): Grups terapèutics (Therapeutic Groups), Grups d'habilitats socials (Social Skills Groups), Psicologia infantil i juvenil (Child and Youth Psychology), Psicologia clínica (Clinical Psychology), Psiquiatria (Psychiatry)

### Community 8 - "Group Therapy Room Photo"
Cohesion: 0.67
Nodes (4): Group Therapy Room Photo, Group Therapy Service, Social Skills Chair Circle Photo, Social Skills Training Service

### Community 9 - "Clinical Psychology Service"
Cohesion: 0.50
Nodes (4): Clinical Psychology Service, Clinical Psychology Therapy Corner Photo, Play Therapy Table Photo, Psychology Service

### Community 26 - "el"
Cohesion: 0.08
Nodes (49): actionLabel(), applyConfigureBarChrome(), bindConfigureCountPillTooltip(), bindConfigureInlineControlHover(), bindConfigureModifierPillHover(), buildConfigureActionControl(), buildConfigureCountControl(), buildConfigureRow() (+41 more)

### Community 27 - "initPageChat"
Cohesion: 0.09
Nodes (48): armPageChatForTyping(), attachSteerFocusDebug(), attachSteerFocusGuard(), clearSteerAwaitTimer(), clearSteerFocusRecoverTimer(), collapsePageChat(), configureVoiceContext(), expandPageChat() (+40 more)

### Community 28 - "mountSvelteComponentVariant"
Cohesion: 0.08
Nodes (39): applyOriginalAttrsToSvelteAnchor(), buildSvelteExpressionTextMap(), buildSveltePropValuesFromLiveElement(), buildSveltePropValuesV2(), clearMountErrorCard(), cloneWithoutElements(), collectTextNodes(), collectVisibleTexts() (+31 more)

### Community 29 - "setLiveState"
Cohesion: 0.18
Nodes (34): applyEditing(), beginNewLiveConfiguration(), buildLocatorForLeaf(), cancelEditing(), cancelEditingToPicking(), cancelInsertConfigure(), clearAnnotations(), clearInsertPicking() (+26 more)

### Community 30 - "renderDesignVisual"
Cohesion: 0.09
Nodes (34): buildCollapsible(), buildDesignHeader(), buildListHtml(), buildRadiiModels(), copyToClipboard(), cssSafe(), designEmptyMessage(), escapeHtml() (+26 more)

### Community 31 - "resumeSession"
Cohesion: 0.16
Nodes (32): applySavedSessionMeta(), checkpointPayload(), completeParameterGenerationIfReady(), completeParameterPublication(), completeSourceInjection(), enterRecoveryWaitingForAnchor(), finalizeInsertSession(), findActiveSessionSummary() (+24 more)

### Community 32 - "documentRefForElement"
Cohesion: 0.08
Nodes (31): addManualContextText(), canRestoreManualEditElement(), collectManualContextPieces(), walk(), contextElementForManualEdit(), copyEditContainerContext(), copyEditLeafContext(), cssIdent() (+23 more)

### Community 33 - "handleManualEditActivity"
Cohesion: 0.16
Nodes (27): clearStoredManualApplyState(), fetchPendingCount(), handleManualEditActivity(), hasTextRows(), hidePendingApplyDock(), manualApplyLoadingText(), manualApplyStateKey(), manualEditEventForCurrentPage() (+19 more)

### Community 34 - "init"
Cohesion: 0.12
Nodes (26): agentHasWorkInFlight(), agentStatusText(), barPaletteForTheme(), brandMarkSvg(), buildParamsPanel(), buildSteerProcessingDots(), buildSteerQueueHint(), designPanelCss() (+18 more)

### Community 35 - "Responsive Design"
Cohesion: 0.08
Nodes (25): Assess Adaptation Challenge, Breakpoints: Content-Driven, Content Adaptation, Desktop Adaptation (Mobile → Desktop), Detect Input Method, Not Just Screen Size, Email Adaptation (Web → Email), Implement Adaptations, Layout Adaptation Patterns (+17 more)

### Community 36 - "connectSSE"
Cohesion: 0.14
Nodes (24): abandonForeignSession(), connectSSE(), discardOrphanedSession(), dismissToast(), handleDiscard(), injectVariantsFromSource(), isFrameworkComponentPreviewMode(), isJsxSourceFile() (+16 more)

### Community 37 - "captureElementToBlob"
Cohesion: 0.11
Nodes (23): averageRgb01(), bufferToBase64(), captureChromeNodes(), captureElementFromRenderedAncestor(), captureElementToBlob(), collectFontCssText(), compileShader(), cssColorToRgb01() (+15 more)

### Community 38 - "onboard.md"
Cohesion: 0.09
Nodes (22): Assess Onboarding Needs, Context Over Ceremony, Contextual Help, Design Onboarding Experiences, Documentation & Help, Empty State Design, Feature Discovery & Adoption, Guided Tours & Walkthroughs (+14 more)

### Community 39 - "new-work.md"
Cohesion: 0.13
Nodes (14): Recommended Actions, Craft (deprecated alias), Apply, Live-mode signature params, Set the spatial thesis, Two isolated assessments, Verify, Visitor mode (+6 more)

### Community 40 - "createLiveBrowserDomHelpers"
Cohesion: 0.12
Nodes (16): collectEditableTextRows(), visit(), createLiveBrowserDomHelpers(), cssId(), liveUiRoot(), makeFrozenAnchor(), own(), pickable() (+8 more)

### Community 41 - "The Toolkit"
Cohesion: 0.10
Nodes (20): Animate complex properties, Assess What "Extraordinary" Means Here, For data-heavy interfaces, For functional UI, For performance-critical UI, For visual/marketing surfaces, Implement with Discipline, Interact with the device (+12 more)

### Community 42 - "onAnnotDown"
Cohesion: 0.16
Nodes (20): beginEditPin(), buildAnnotationsForCapture(), buildPinElement(), cancelEditingPin(), clampPlaceholderSize(), finalizeEditingPin(), initAnnotOverlay(), localCoords() (+12 more)

### Community 43 - "createLiveBrowserSessionState"
Cohesion: 0.21
Nodes (15): createLiveBrowserSessionState(), clearHandled(), clearScrollY(), clearSession(), isHandled(), loadSession(), markHandled(), nextCheckpointRevision() (+7 more)

### Community 44 - "handleAccept"
Cohesion: 0.19
Nodes (17): applyPlaceholderDimensions(), createInsertPlaceholder(), ensureInsertPlaceholder(), findAnyVariantsWrapper(), findInsertAnchorInDom(), findVariantsWrapper(), handleAccept(), isInsertGeneratingSession() (+9 more)

### Community 45 - "animate.md"
Cohesion: 0.12
Nodes (14): Accessibility and control, Choose material by meaning, Find the job, Implement to the runtime, Set the motion thesis, Timing and easing, Verify, Visitor mode (+6 more)

### Community 46 - "live.md"
Cohesion: 0.12
Nodes (15): Cleanup, Exit, First-time setup, Handle `accept`, Handle `discard`, Handle fallback, Handle `manual_edit_apply`, Handle `prefetch` (+7 more)

### Community 47 - "Handle `generate`"
Cohesion: 0.12
Nodes (16): 1. Read the screenshot (if present), 2. Wrap the element, 3. Load the action's reference, 4. Plan three variants: identity first, then mode, then axes, 5. Apply the freeform prompt (if present), 6. Deliver variants, 7. Parameters (composition-sized, 0-4 per variant), 8. Signal done (+8 more)

### Community 48 - "Generate Report"
Cohesion: 0.13
Nodes (14): 1. Accessibility (A11y), 2. Performance, 3. Theming, 4. Responsive Design, 5. Implementation Integrity (CRITICAL), Audit Health Score, Detailed Findings by Severity, Diagnostic Scan (+6 more)

### Community 49 - "SKILL.md"
Cohesion: 0.15
Nodes (10): Craft floor, Refuse, Verify, Command guidance, No-argument routing: the context-aware menu, Workflow questions, Commands, How to design (+2 more)

### Community 50 - "cleanup"
Cohesion: 0.27
Nodes (15): abortSvelteComponentInjection(), cleanup(), cleanupAcceptedSession(), clearHandled(), clearScrollY(), clearSession(), handleServerLost(), hideShaderOverlay() (+7 more)

### Community 51 - "New visual work"
Cohesion: 0.14
Nodes (14): 1. Decide what is already true, 2. Ask what will change the work, 3. Choose the right amount of invention, 4. Commit the world, 5. Record the decision, 6. Build with full commitment, 7. Inspect and finish, Both paths (+6 more)

### Community 52 - "optimize.md"
Cohesion: 0.14
Nodes (13): Animation Performance, Assess Performance Issues, Core Web Vitals Optimization, Cumulative Layout Shift (CLS < 0.1), Interaction to Next Paint (INP < 200ms), Largest Contentful Paint (LCP < 2.5s), Loading Performance, Network Optimization (+5 more)

### Community 53 - "Scan mode (approach C: auto-extract, then confirm descriptive language)"
Cohesion: 0.15
Nodes (13): Component translation rules, Narrative mapping, Scan mode (approach C: auto-extract, then confirm descriptive language), Schema, Step 1: Find the design assets, Step 2: Auto-extract what can be auto-extracted, Step 2b: Stage the frontmatter, Step 3: Ask the user for qualitative language (+5 more)

### Community 54 - "refreshParamsPanel"
Cohesion: 0.24
Nodes (13): applyParamDefaults(), closedClipPath(), getVisibleVariantEl(), hideParamsPanel(), mountedParameterCount(), openTunePopover(), parseVariantParams(), popoverDirection() (+5 more)

### Community 55 - "critique.md"
Cohesion: 0.17
Nodes (11): Action Summary, Ask the User, Assessment A: Design Review, Assessment B: Detector + Browser Evidence, Assessment Orchestration, Deliver the Report, Hard Invariants, Persist the Snapshot (+3 more)

### Community 56 - "Simplify the Design"
Cohesion: 0.17
Nodes (11): Assess Current State, Code Simplification, Content Simplification, Document Removed Complexity, Information Architecture, Interaction Simplification, Layout Simplification, Plan Simplification (+3 more)

### Community 57 - "Hardening Dimensions"
Cohesion: 0.17
Nodes (11): Accessibility Resilience, Assess Hardening Needs, Edge Cases & Boundary Conditions, Error Handling, Hardening Dimensions, Input Validation & Sanitization, Internationalization (i18n), Performance Resilience (+3 more)

### Community 58 - "handleMouseMove"
Cohesion: 0.18
Nodes (12): cursorForInsertAxis(), detectInsertAxis(), detectInsertAxisFromStyle(), ensureInsertLine(), handleMouseMove(), hideHighlightTagTooltip(), hideInsertLine(), setPageInteractionCursor() (+4 more)

### Community 59 - "clarify.md"
Cohesion: 0.18
Nodes (10): Actions and navigation, Audit the language, Errors and permissions, Forms, Help and instructional text, Loading, empty, and success states, Rewrite by function, Set the message hierarchy (+2 more)

### Community 60 - "Nielsen's 10 Heuristics"
Cohesion: 0.18
Nodes (11): 10. Help and Documentation, 1. Visibility of System Status, 2. Match Between System and Real World, 3. User Control and Freedom, 4. Consistency and Standards, 5. Error Prevention, 6. Recognition Rather Than Recall, 7. Flexibility and Efficiency of Use (+3 more)

### Community 61 - "document.md"
Cohesion: 0.18
Nodes (10): Pitfalls, Seed mode, Step 1: Route through new-work's workshop, Step 2: Write seed DESIGN.md, Step 3: Confirm, Style guidelines, The frontmatter: token schema, The markdown body: eight sections (canonical order) (+2 more)

### Community 62 - "polish.md"
Cohesion: 0.18
Nodes (10): 1. Establish the system, 2. Gather the evidence, 3. Triage, 4. Polish the whole path, 5. Verify and finish, Color, imagery, and icons, Content and code, Flow and hierarchy (+2 more)

### Community 63 - "quieter.md"
Cohesion: 0.18
Nodes (10): Assess Current State, Color Refinement, Composition Refinement, Motion Reduction, Plan Refinement, Refine the Design, Simplification, Verify Quality (+2 more)

### Community 64 - "scheduleAcceptCleanup"
Cohesion: 0.31
Nodes (11): acceptedDomAlreadyClean(), clearHandledWrapperReloadStamp(), deferredRecoverySuperseded(), ensureAcceptedDomClean(), findAcceptedRuntimeWrappers(), handledWrapperReloadKey(), reloadAfterMissingAcceptedDom(), restoreAcceptedDomFromSnapshot() (+3 more)

### Community 65 - "initGlobalBar"
Cohesion: 0.29
Nodes (10): hideAgentPollTooltip(), initGlobalBar(), makeIconBtn(), loadDetectScript(), onDetectMessage(), positionPendingDock(), requestDetectScan(), teardown() (+2 more)

### Community 66 - "Generate Combined Critique Report"
Cohesion: 0.20
Nodes (10): Design Health Score, Design Specificity Verdict, Generate Combined Critique Report, Minor Observations, Overall Impression, Persona Red Flags, Priority Issues, Questions to Consider (+2 more)

### Community 67 - "Init flow"
Cohesion: 0.20
Nodes (10): Completion gate, Init flow, Step 1: Load current state, Step 2: Explore the project, Step 3: Interview for product truth, Step 4: Write PRODUCT.md, Step 5: Record workflow defaults, Step 6: Wrap up or resume (+2 more)

### Community 68 - "Common Cognitive Load Violations"
Cohesion: 0.22
Nodes (9): 1. The Wall of Options, 2. The Memory Bridge, 3. The Hidden Navigation, 4. The Jargon Barrier, 5. The Visual Noise Floor, 6. The Inconsistent Pattern, 7. The Multi-Task Demand, 8. The Context Switch (+1 more)

### Community 69 - "iOS platform"
Cohesion: 0.22
Nodes (9): Color & materials, Components & controls, iOS platform, Layout & structure, Motion, The iOS slop test, Touch targets, Typography (+1 more)

### Community 70 - "Operate mode depth (and Read notes)"
Cohesion: 0.22
Nodes (9): Color, Components, Layout, Motion, Operate mode depth (and Read notes), Product constraints, Product permissions, The product slop test (+1 more)

### Community 71 - "Shape"
Cohesion: 0.22
Nodes (8): Cadence, Confirm and stop, Phase 1: Discovery interview, Phase 2: Resolve the design direction, Phase 3: Write the brief, Round 1: purpose, people, and outcome, Round 2: material, behavior, and boundaries, Shape

### Community 72 - "adapt.native.md"
Cohesion: 0.25
Nodes (7): Adaptation Strategies, Assess Adaptation Challenge, Implement & Verify, Orientation & foldables, Phone → Tablet (iPad / large screens), Platform → platform (iOS ↔ Android), Web → native (porting a website or web app)

### Community 73 - "Android platform"
Cohesion: 0.25
Nodes (8): Android platform, Color & theming, Components & motion, Layout & structure, The Android slop test, Touch targets, Typography, Verifying the build

### Community 74 - "colorize.md"
Cohesion: 0.25
Nodes (7): Apply at system scale, Audit before choosing, Choose a strategy, Contrast and perception, Live-mode signature params, Verify, Visitor mode

### Community 75 - "Persona-Based Design Testing"
Cohesion: 0.25
Nodes (8): 1. Impatient Power User: "Alex", 2. Confused First-Timer: "Jordan", 3. Accessibility-Dependent User: "Sam", 4. Deliberate Stress Tester: "Riley", 5. Distracted Mobile User: "Casey", Persona-Based Design Testing, Project-Specific Personas, Selecting Personas

### Community 76 - "doctor.md"
Cohesion: 0.25
Nodes (7): Monorepo notes, Opting out of the boot check, Step 1: Run the pass, Step 2: Act by severity, Step 3: Deprecated fields are binding, Step 4: Do not overclaim on truth drift, What this owns, and what it does not

### Community 77 - "Extract Flow"
Cohesion: 0.25
Nodes (7): Extract Flow, Step 1: Discover the Design System, Step 2: Identify Patterns, Step 3: Plan Extraction, Step 4: Extract & Enrich, Step 5: Migrate, Step 6: Document

### Community 78 - "live-setup.md"
Cohesion: 0.25
Nodes (7): append-arrays, append-string, Config drift, Consent prompt (use this phrasing), CSP detection (first-time only), Troubleshooting, Write the config

### Community 79 - "syncEditBadgeHitProxies"
Cohesion: 0.36
Nodes (8): bindEditBadgeProxy(), editBadgeProxyTargets(), initEditBadgeHitProxies(), proxyMouseEvent(), setImportantStyle(), styleEditBadgeProxy(), syncEditBadgeHitProxies(), usesShadowChromeRoot()

### Community 80 - "Impeccable Asset Producer"
Cohesion: 0.29
Nodes (6): Core Rule, Decision Comps, Impeccable Asset Producer, Input Contract, Output Contract, The job

### Community 81 - "Impeccable Finish Reviewer"
Cohesion: 0.29
Nodes (6): Checks, in order, Disposition, Impeccable Finish Reviewer, Input Contract, Output Contract, Verdict Pass

### Community 82 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 83 - "Generate Report"
Cohesion: 0.29
Nodes (7): Audit Health Score, Detailed Findings by Severity, Executive Summary, Generate Report, Patterns & Systemic Issues, Platform Conformance Verdict, Positive Findings

### Community 84 - "Cognitive Load Assessment"
Cohesion: 0.29
Nodes (7): Cognitive Load Assessment, Cognitive Load Checklist, Extraneous Load: Bad Design, Germane Load: Learning Effort, Intrinsic Load: The Task Itself, The Working Memory Rule, Three Types of Cognitive Load

### Community 85 - "Impeccable Asset Producer"
Cohesion: 0.29
Nodes (6): Core Rule, Decision Comps, Impeccable Asset Producer, Input Contract, Output Contract, The job

### Community 86 - "Impeccable Finish Reviewer"
Cohesion: 0.29
Nodes (6): Checks, in order, Disposition, Impeccable Finish Reviewer, Input Contract, Output Contract, Verdict Pass

### Community 87 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 88 - "handleGo"
Cohesion: 0.48
Nodes (7): captureAndEmit(), extractContext(), handleGo(), handleInsertCreate(), resolveScrollLockAnchorTop(), startScrollLock(), writeScrollY()

### Community 89 - "live-browser-ignores.js"
Cohesion: 0.52
Nodes (6): globToRegex(), matchesScope(), normalizeIgnoreRule(), normalizeIgnoreValue(), pageCandidates(), resolveDetectIgnores()

### Community 90 - "Diagnostic Scan"
Cohesion: 0.33
Nodes (6): 1. Accessibility (VoiceOver / TalkBack), 2. Performance, 3. Appearance & Theming, 4. Platform Conformance (CRITICAL), 5. Adaptivity, Diagnostic Scan

### Community 91 - "bolder.md"
Cohesion: 0.33
Nodes (5): Before you finish, Scope is sovereign, The amplification, The skeleton test, Why it reads flat

### Community 92 - "/impeccable hooks"
Cohesion: 0.33
Nodes (6): Constraints, Failure modes, Flow, /impeccable hooks, Routing, Triage findings

### Community 93 - "Visualize: Direction Comps & Asset Production"
Cohesion: 0.33
Nodes (5): After approval: the comp becomes a spec, Generate three compositional options, One approval point, Plates and provenance, Visualize: Direction Comps & Asset Production

### Community 94 - "impeccable"
Cohesion: 0.60
Nodes (5): impeccable script, check_download(), fetch_url(), probe_ok(), setup_help()

### Community 95 - "Impeccable Documenter"
Cohesion: 0.40
Nodes (4): Impeccable Documenter, Input Contract, Output Contract, Workflow

### Community 96 - "Impeccable Documenter"
Cohesion: 0.40
Nodes (4): Impeccable Documenter, Input Contract, Output Contract, Workflow

### Community 97 - "Heuristics Scoring Guide"
Cohesion: 0.50
Nodes (4): Heuristics Scoring Guide, Issue Severity (P0–P3), Reference Material, Score Summary

## Knowledge Gaps
- **452 isolated node(s):** `Core Rule`, `Decision Comps`, `Input Contract`, `The job`, `Output Contract` (+447 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 478 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reference Material` connect `Heuristics Scoring Guide` to `Persona-Based Design Testing`, `Cognitive Load Assessment`, `critique.md`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Cognitive Load Assessment` connect `Cognitive Load Assessment` to `Heuristics Scoring Guide`, `Common Cognitive Load Violations`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `Core Rule`, `Decision Comps`, `Input Contract` to the rest of the system?**
  _452 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Pragma Institut` be split into smaller, more focused modules?**
  _Cohesion score 0.08708708708708708 - nodes in this community are weakly interconnected._
- **Should `live-browser.js` be split into smaller, more focused modules?**
  _Cohesion score 0.04861111111111111 - nodes in this community are weakly interconnected._
- **Should `modern-screenshot.umd.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08959899749373433 - nodes in this community are weakly interconnected._
- **Should `el` be split into smaller, more focused modules?**
  _Cohesion score 0.08163265306122448 - nodes in this community are weakly interconnected._