# Portfolio progress

This folder is the repository-local source of truth for portfolio progress. Update it whenever a case study, visual direction, navigation pattern, or publication decision changes so future prompts can begin from current facts rather than stale assumptions.

## Current baseline

- Active case studies: PMCA at `/work/pmca`, Viva Aerobus at `/work/viva-aerobus`, and GLI Simulator at `/work/gli-simulator`.
- Case-study architecture: `src/projects/caseStudyRegistry.ts` resolves page-specific implementations by project slug.
- Visual direction: dark, cinematic portfolio with styled-components and centralized theme tokens.
- PMCA uses original visuals and a local interactive workflow demo with fictional records.
- PMCA content is intentionally limited to publicly confirmed contribution scope; confidential implementation detail is excluded.

## Completed

- Home page visual refresh, section imagery, navigation, footer, and back-to-top behavior.
- PMCA project card and publication-safe PMCA case study.
- Interactive trade-notification workflow demo with tabs, steps, validation, row lifecycle, and tests.
- Case-study route scroll restoration to the page hero.
- PMCA recruiter-facing copy and contribution-scope polish.
- Viva Aerobus API engineering case study with an original local contract-validation demo.
- GLI Simulator scientific-computing case study with an original local cycle-explorer demo.
- Shared case-study registry and reusable AI case-study workflow documentation.

## Next candidates

1. Revisit case-study visual polish only if a further review is requested.
2. Consider asset compression separately when performance evidence justifies it; do not change formats as part of ordinary content edits.

## Update checklist

- Record material changes in `CHANGELOG.md`.
- Keep claims limited to user-confirmed facts.
- Do not record private source paths, customer information, ticket identifiers, production data, credentials, or internal URLs.
- Run the project validation commands after substantial work.
