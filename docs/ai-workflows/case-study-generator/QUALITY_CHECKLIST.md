# Case-study quality checklist

## Safety and evidence

- [ ] Current task explicitly authorizes any reference-source inspection.
- [ ] Reference sources stayed read-only.
- [ ] Technologies are verified from source, not only from the brief.
- [ ] System scope is separate from Gabriel's confirmed contribution.
- [ ] Uncertain authorship is labeled for confirmation rather than inferred.
- [ ] No metrics, dates, impact, team size, or ownership claims were invented.
- [ ] No secrets, internal URLs, ticket IDs, production values, customer data, or proprietary source were added.

## Narrative and design

- [ ] The hero explains the project and its engineering story quickly.
- [ ] Sections fit this project rather than mechanically copying PMCA.
- [ ] The page has roughly 6–10 substantive sections unless justified otherwise.
- [ ] One concise confidentiality note appears near the end when needed.
- [ ] Visuals are original, meaningful, and do not imitate confidential screenshots.
- [ ] An interactive demo is local, fictional, accessible, and used only when it strengthens the story.
- [ ] Code insight is original, short, and demonstrates a verified pattern.

## Repository architecture

- [ ] Existing `CaseStudyLayout`, `CaseStudySection`, theme tokens, shared components, and project content model were reviewed for reuse.
- [ ] Project code is placed under `src/projects/<project-slug-or-domain>/` when appropriate.
- [ ] The page is registered through `src/projects/caseStudyRegistry.ts`.
- [ ] No project-specific `if (slug === ...)` routing chain was introduced.
- [ ] Added assets are referenced; unused development assets are removed.
- [ ] Below-the-fold images use lazy loading when appropriate.

## Responsive and accessible behavior

- [ ] Reviewed at approximately 375px, 768px, 1280px, and 1440px+.
- [ ] No page-level horizontal overflow.
- [ ] Tables use local overflow only where justified.
- [ ] Headings, buttons, links, labels, validation, captions, focus, keyboard use, reduced motion, and contrast were reviewed.
- [ ] Essential state is not communicated by color alone.

## Tests and validation

- [ ] Behavioral tests cover meaningful routing, interaction, state, or validation.
- [ ] `npm run format` passes.
- [ ] `npm run format:check` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run test:run` passes.
- [ ] `npm run build` passes.
- [ ] `git status` was reviewed.
- [ ] Commit and push wait for explicit approval.
