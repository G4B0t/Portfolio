# Portfolio guidance

This is a **public** professional Software Engineering Portfolio. Only modify `D:\MEGABE\Portfolio`. Do not inspect external reference projects unless a later task explicitly authorizes read-only analysis. Never copy private source material, credentials, internal URLs, customer data, proprietary assets, or confidential architecture into this repository.

Use React, TypeScript strict mode, styled-components, centralized theme tokens, and centralized professional content. Keep components focused, responsive, accessible, and avoid unnecessary dependencies. Custom React + styled-components is the default for simple UI; Radix Primitives are permitted only for genuinely complex accessible interaction. Never add Radix Themes, Material UI, Bootstrap, Ant Design, Chakra UI, Tailwind, Redux, or another global-state library without explicit authorization.

Never invent professional experience, responsibilities, achievements, metrics, technologies, or business impact. PMCA and Viva Aerobus are potentially confidential; GLI Simulator must also be reviewed before reuse. Treat external project references as read-only future sources only.

## Reference hierarchy

- **PMCA:** primary `C:\dev\Viper_2`; secondary `C:\dev\Viper` and `C:\dev\Cobra`.
- **Viva Aerobus:** primary project `C:\Users\Usuario\RiderProjects\API`. `LLM` and `LLMCoder` are supporting implementation tools, never separate portfolio projects.
- **GLI Simulator:** backend `D:\UPB\Tesis_GLI` and frontend `D:\UPB\Tesis_GLI_FE`; present them as one product.

Never perform Git writes in any reference project.

Use this repository-local identity only: `G4B0t <gabrielefrain23@gmail.com>`. The expected remote is `git@github.com-G4B0t:G4B0t/Portfolio.git`. Never modify global Git configuration or expose/change SSH keys.

After substantial work, run `npm run typecheck`, `npm run lint`, `npm run test:run`, and `npm run build`. Ignore generated folders unless directly relevant.
