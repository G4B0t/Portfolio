# Master case-study prompt

Use this prompt with a completed runtime Project Brief.

> You are implementing a professional Software Engineering Portfolio case study using the repository's established case-study workflow.
>
> Read:
>
> - `docs/portfolio-progress/README.md`
> - `docs/portfolio-progress/CHANGELOG.md`
> - `docs/ai-workflows/case-study-generator/PROJECT_BRIEF_TEMPLATE.md`
> - `docs/ai-workflows/case-study-generator/QUALITY_CHECKLIST.md`
>
> Use the provided Project Brief as runtime project context. Use PMCA as an architectural and quality baseline, not as a mandatory content template.

## A. Workspace and Git safety

1. Verify the Portfolio root, run `git status`, and confirm the current branch equals `EXPECTED_BRANCH` from the Project Brief. Stop if it does not.
2. Never modify `main` unless explicitly requested.
3. The Portfolio repository is writable. Reference repositories are read-only unless the user explicitly states otherwise.
4. In reference repositories, never edit, format, install dependencies, generate files, migrate, switch branches, commit, push, pull, merge, reset, clean, or stash. Safe inspection includes status, log, show, blame, diff, and remote inspection.
5. Inspect a reference repository only when the current task explicitly authorizes it.

## B. Source discovery

Map authorized source repositories before reading deeply. Identify application type, major folders, languages, manifests, framework, build, routing, state, API/services, shared UI, domain modules, tests, and tooling. Ignore generated folders such as `node_modules`, `dist`, `build`, `coverage`, `bin`, `obj`, virtual environments, caches, and `.git`.

Inspect deeper only where evidence is needed. Do not recursively read an entire source repository.

## C. Verified technology and architecture

Verify each publishable technology with representative source evidence: manifests, configuration, imports, bootstrap, or implementation. Separate findings into **Verified**, **Likely**, and **Unverified**; publish only verified technologies.

Explain system relationships, not only folders. Select architecture concerns appropriate to the project: UI, feature modules, domain logic, state, async orchestration, APIs, backend, database, tests, simulation, data pipelines, automation, or tooling.

## D. Engineering signal and contribution analysis

Rank the engineering themes that make this project distinctive. Possible signals include state complexity, transformations, reusable abstractions, validation, async flows, numerical methods, performance, testing, integration, domain modeling, automation, observability, contracts, workflows, simulation, calibration, optimization, or developer tooling.

Keep four evidence groups separate:

1. **System evidence** — clearly present in the product.
2. **Confirmed user contribution** — explicitly supplied in the Project Brief.
3. **Strong source evidence of contribution** — supported by Git history or equivalent evidence.
4. **Requires Gabriel confirmation** — present in the system but personal authorship is unclear.

Repository presence is not proof of authorship.

## E. Publication safety

Classify findings before implementation:

- **Safe to publish:** generic architecture, verified public stack, generalized patterns, high-level workflows, sanitized diagrams, fictional demos.
- **Safe after sanitization:** workflow structures, UI concepts, generalized data models, product areas.
- **Do not publish:** credentials, production data, internal URLs, customer information, ticket IDs, infrastructure identifiers, proprietary algorithms, private source, sensitive rules, or confidential screenshots.

If a secret or private configuration is found, do not repeat its value. Report only: `Potential secret/private configuration detected.`

## F. Story and information architecture

Before coding, answer:

- What should a recruiter remember after 60 seconds?
- What is the primary and secondary engineering story?
- What is the strongest technical evidence?
- What is Gabriel's confirmed contribution story?

Choose only sections that strengthen that story. Possible sections include hero, context, domain, product surface, system/API/frontend/backend architecture, data model, data-intensive UI, workflows, testing, automation, scientific model, performance, tooling, reusable systems, decisions, demo, code insight, contribution, takeaways, and confidentiality note. Aim for 6–10 substantive sections unless the project genuinely needs more.

## G. Implementation rules

Reuse existing Portfolio primitives before introducing new infrastructure: `CaseStudyLayout`, `CaseStudySection`, theme, shared components, `ProjectCard`, content model, the case-study registry, and prior case studies.

Place useful project-specific code under `src/projects/<project-slug-or-domain>/`. Register implemented studies in `src/projects/caseStudyRegistry.ts`; do not add slug-specific routing chains.

Use a concise hero with project category, title, technical subtitle, verified stack, and confirmed role only when available. Keep confidentiality language near the end, not in the hero.

Use original technical visualizations. An interactive demo is optional; when used, it must be local, lightweight, accessible, fictional/synthetic, and demonstrate engineering rather than decoration. Code insight is optional and must be original, short, and sanitized.

Use 2–4 engineering decisions in the form: **Problem → Engineering decision → Why it matters**. Clearly distinguish system scope from personal contribution. Never invent metrics, impact, dates, team size, authorship, performance claims, or customer information.

Preserve the Portfolio visual language while allowing project-specific identity: midnight/navy base, indigo/violet accents, restrained glow, clear typography, thin borders, and recruiter-oriented technical density. Do not add large visualization or UI dependencies without explicit approval.

## H. Quality review

Review responsive behavior at approximately 375px, 768px, 1280px, and 1440px+. Ensure no page-level horizontal overflow, readable code, local table overflow when appropriate, usable controls, wrapping chips, and responsive cards.

Review semantic headings, links, buttons, focus, labels, captions, validation relationships, keyboard operation, reduced motion, contrast, and non-color state cues.

Add behavioral tests for meaningful routing, interactions, state transitions, validation, or navigation. Avoid snapshot-only tests.

Run every command in `QUALITY_CHECKLIST.md`, then run `git status`. Do not hide failures; identify whether a failure is introduced or pre-existing.

## I. Human review report

Before commit or push, report:

1. Project understanding and verified stack.
2. Primary engineering story, architecture, and strongest evidence.
3. Confirmed contribution and items needing Gabriel confirmation.
4. Publication-safety decisions.
5. Sections, visuals, interactive evidence, and code insight implemented.
6. Reusable architecture, files, assets, and tests changed.
7. Validation results, Git status, and remaining risks/questions.

Stop after the report. Do not commit or push until explicit approval.
