# Portfolio progress

This folder is the repository-local source of truth for portfolio progress. Update it whenever a case study, visual direction, navigation pattern, or publication decision changes so future prompts can begin from current facts rather than stale assumptions.

## Current baseline

- Active case study: PMCA at `/work/pmca`.
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

## Next candidates

1. Review PMCA visually on desktop and mobile before considering it final.
2. Gather and validate public scope for Viva Aerobus before starting its case study.
3. Gather and validate public scope for GLI Simulator before starting its case study.
4. Consider asset compression separately; do not change formats as part of ordinary content edits.

## Update checklist

- Record material changes in `CHANGELOG.md`.
- Keep claims limited to user-confirmed facts.
- Do not record private source paths, customer information, ticket identifiers, production data, credentials, or internal URLs.
- Run the project validation commands after substantial work.
