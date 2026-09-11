# About and Experience review context

## Purpose

This note records the intent and publication boundaries for the About and Experience sections prepared on `feature/about-section`. It is a review aid, not public portfolio copy.

## About

- Presents a systems-oriented engineering profile across interfaces, backend services, and engineering applications.
- States a verified academic foundation: Systems Engineering at Universidad Católica Boliviana “San Pablo” (UCB), with complementary Udemy coursework in Python, React, and ASP.NET Core.
- Uses three principles to explain the work approach: make complexity understandable, design for dependable change, and connect model, service, and interface.
- Keeps location out of this section; it remains in the footer only.

## Experience

- Presents two verified periods at a high level: current consulting and software-development work at DvSoft, and project-based full-stack systems delivery from 2022 to 2025.
- Describes technologies and responsibilities only at a general, publication-safe level: C#/.NET, REST APIs, React, TypeScript, Angular, Node.js, operational interfaces, validation, reporting, and iterative delivery.
- Avoids client names, customer data, internal product names, metrics, ticket identifiers, private architecture, credentials, and internal URLs.
- Does not claim titles, outcomes, or responsibilities that are not supported by the reviewed CV and portfolio project analysis.

## Implementation

- Professional copy is centralized in `src/content/profile.ts`.
- `src/sections/About` and `src/sections/Experience` each keep markup in `index.tsx` and presentation in `styles.ts`.
- Existing section imagery and the home-page order are preserved.
- No case-study routes, shared architecture, interactive demos, assets, or technology stack were changed.

## Review checklist

- Confirm the public tone accurately represents Gabriel's professional profile.
- Confirm the stated education and course categories are appropriate for publication.
- Confirm the DvSoft organization name and the two experience periods are appropriate for publication.
- Check desktop and mobile readability against the existing background imagery.
- Keep all future refinements within the publication boundaries above.

## Validation completed

After the implementation, formatting, TypeScript checking, linting, tests, and production build completed successfully.
