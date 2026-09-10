# Case-study generator workflow

This workflow turns real engineering work into credible, publication-safe Portfolio case studies. It is intended for future AI-assisted work in this repository.

## Core principle

> Use PMCA as an architectural and quality baseline, not as a mandatory content template.

Each project must tell its own technical story. An enterprise frontend may center on state and data-intensive UI; an API project may center on integration and validation; a simulation may center on models, numerical methods, and visualization.

## Pipeline

```text
Source evidence
  ↓
Technical analysis
  ↓
Contribution verification
  ↓
Publication safety
  ↓
Case-study narrative
  ↓
Visual / interactive evidence
  ↓
Implementation
  ↓
Technical validation
  ↓
Human review
```

Contribution verification and publication safety are mandatory for professional or client work.

## How to use it

1. Read `docs/portfolio-progress/README.md` and `CHANGELOG.md` for the current portfolio baseline.
2. Copy `PROJECT_BRIEF_TEMPLATE.md` into the current Codex session; fill it with runtime context rather than persisting sensitive values.
3. Ask Codex to follow `MASTER_CASE_STUDY_PROMPT.md` with that brief.
4. Analyze authorized source repositories before forming claims.
5. Review findings with Gabriel and implement only verified claims.
6. Run `QUALITY_CHECKLIST.md`.
7. Commit or push only after explicit approval.

Project-specific local paths, credentials, internal URLs, customer data, and private details belong in the runtime session only. Do not add them to this public repository.
