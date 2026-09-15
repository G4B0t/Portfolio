import { useMemo, useState } from 'react';
import { ArrowLeft, FileText, Medal, ShieldCheck, UserRoundPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { olimpiadasDocentesCaseStudy } from '@/projects/olimpiadasDocentes/content';
import {
  ActionButton,
  AthleteForm,
  CardGrid,
  Credential,
  CredentialPreview,
  DemoFrame,
  DemoHeader,
  DocumentList,
  Hero,
  HeroCopy,
  HeroVisual,
  Kicker,
  Lead,
  Note,
  Page,
  RoleNav,
  RolePanel,
  RoleTabs,
  Standings,
  Tags,
  Title,
  TextGrid,
} from './styles';

type Role = 'Administrator' | 'Representative' | 'Coordinator';

const standings = [
  { institution: 'Andina University', gold: 14, silver: 9, bronze: 7 },
  { institution: 'Pacific Institute', gold: 10, silver: 12, bronze: 8 },
  { institution: 'Highland College', gold: 8, silver: 7, bronze: 11 },
  { institution: 'Valley University', gold: 6, silver: 8, bronze: 5 },
];

const roleTools: Record<Role, string[]> = {
  Administrator: ['People & roles', 'Athlete registry', 'Reports', 'General news'],
  Representative: ['Athlete registry', 'Delegation report', 'Eligibility review'],
  Coordinator: ['Medal records', 'Discipline news', 'Discipline report'],
};

export function OlimpiadasDocentesCaseStudy() {
  const [role, setRole] = useState<Role>('Administrator');
  const totals = useMemo(
    () => standings.map((item) => ({ ...item, total: item.gold + item.silver + item.bronze })),
    [],
  );

  return (
    <Page>
      <Hero>
        <HeroCopy>
          <Kicker>{olimpiadasDocentesCaseStudy.category}</Kicker>
          <Title>{olimpiadasDocentesCaseStudy.title}</Title>
          <Lead>{olimpiadasDocentesCaseStudy.subtitle}</Lead>
          <p>{olimpiadasDocentesCaseStudy.summary}</p>
          <Tags aria-label="Technology stack">
            {olimpiadasDocentesCaseStudy.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Tags>
        </HeroCopy>
        <HeroVisual aria-label="Abstract event operations dashboard">
          <span className="signal signal-one" />
          <span className="signal signal-two" />
          <span className="signal signal-three" />
          <div className="podium" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="hero-readout">
            <span>event workspace</span>
            <strong>register → validate → report</strong>
          </div>
        </HeroVisual>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Product boundary"
        title="One operational system connects enrollment, event control, and visibility."
        introduction="The original product structure is represented here as a new, self-contained portfolio experience—not as a connected deployment."
      >
        <TextGrid>
          <p>
            Sports events require more than a registration form. Participants, institutions,
            disciplines, eligibility, results, and documents have to stay connected while
            different people work from different responsibilities.
          </p>
          <p>
            This reconstruction makes those relationships visible through four local demos.
            Their data is deliberately fictional, while the workflow structure reflects the
            project&apos;s verified functional areas.
          </p>
        </TextGrid>
        <CardGrid>
          {olimpiadasDocentesCaseStudy.pillars.map((pillar, index) => {
            const Icon = [UserRoundPlus, ShieldCheck, FileText][index];
            return (
              <article key={pillar.title}>
                <Icon aria-hidden="true" size={21} />
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            );
          })}
        </CardGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / Public results"
        title="A medal table turns event outcomes into a legible public view."
        introduction="Fictional standings demonstrate the public-facing result layer."
      >
        <DemoFrame>
          <DemoHeader>
            <div>
              <span>Public view</span>
              <h3>Medal standings</h3>
            </div>
            <Badge>All disciplines</Badge>
          </DemoHeader>
          <Standings>
            {totals.map((entry, index) => (
              <article key={entry.institution}>
                <strong>0{index + 1}</strong>
                <span>{entry.institution}</span>
                <div>
                  <b className="gold">{entry.gold}</b>
                  <b className="silver">{entry.silver}</b>
                  <b className="bronze">{entry.bronze}</b>
                  <em>{entry.total}</em>
                </div>
              </article>
            ))}
          </Standings>
        </DemoFrame>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Athlete operations"
        title="Registration keeps an athlete record connected to event context."
        introduction="This original demo reflects the registration, review, and discipline-assignment flow with invented identities."
      >
        <DemoFrame>
          <DemoHeader>
            <div>
              <span>Representative workspace</span>
              <h3>Athlete registration</h3>
            </div>
            <ActionButton type="button">New athlete</ActionButton>
          </DemoHeader>
          <AthleteForm aria-label="Fictional athlete registration form">
            <label>
              Given name
              <input defaultValue="Lucía" aria-label="Given name" />
            </label>
            <label>
              Family name
              <input defaultValue="Mendoza" aria-label="Family name" />
            </label>
            <label>
              Institution
              <select defaultValue="andina" aria-label="Institution">
                <option value="andina">Andina University</option>
                <option value="valley">Valley University</option>
              </select>
            </label>
            <label>
              Discipline
              <select defaultValue="athletics" aria-label="Discipline">
                <option value="athletics">Athletics · 400 m</option>
                <option value="chess">Chess · Open</option>
              </select>
            </label>
            <div className="review-card">
              <span>Eligibility</span>
              <strong>Ready for review</strong>
              <small>Category and participant record are complete.</small>
            </div>
          </AthleteForm>
        </DemoFrame>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Permission model"
        title="The navigation changes with the responsibility, not just the page."
        introduction="Switch roles to inspect the fictional workspace surface available to each event function."
      >
        <RolePanel>
          <RoleTabs aria-label="Select a fictional event role">
            {(Object.keys(roleTools) as Role[]).map((item) => (
              <button
                key={item}
                type="button"
                data-active={role === item}
                onClick={() => setRole(item)}
              >
                {item}
              </button>
            ))}
          </RoleTabs>
          <RoleNav>
            <div className="identity">
              <span>Signed in as</span>
              <strong>{role}</strong>
            </div>
            <nav aria-label={`${role} tools`}>
              {roleTools[role].map((tool, index) => (
                <button key={tool} type="button" className={index === 0 ? 'active' : ''}>
                  {tool}
                </button>
              ))}
            </nav>
            <div className="workspace-copy">
              <span>Workspace access</span>
              <h3>{roleTools[role][0]}</h3>
              <p>
                The interface presents a focused operational surface while keeping the
                role&apos;s next actions clear.
              </p>
            </div>
          </RoleNav>
        </RolePanel>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Documents"
        title="Reports and credentials convert operational data into event artifacts."
        introduction="Every document below is an original mock designed for this portfolio."
      >
        <DemoFrame>
          <DemoHeader>
            <div>
              <span>Reports centre</span>
              <h3>Event documents</h3>
            </div>
            <FileText aria-hidden="true" size={20} />
          </DemoHeader>
          <DocumentList>
            <button type="button"><span>01</span> Institution delegation report <b>PDF</b></button>
            <button type="button"><span>02</span> Athlete eligibility summary <b>PDF</b></button>
            <button type="button"><span>03</span> Discipline registration list <b>PDF</b></button>
          </DocumentList>
          <CredentialPreview>
            <Credential>
              <div className="credential-top"><Medal size={18} /><span>EVENT ACCESS</span></div>
              <div className="credential-body"><i aria-hidden="true" /><div><strong>Lucía Mendoza</strong><span>Andina University</span><small>Athletics · 400 m</small></div></div>
              <div className="credential-footer">Fictional portfolio record · 2026</div>
            </Credential>
            <p>Compact credential preview with a category-color treatment and a fictional participant record.</p>
          </CredentialPreview>
        </DemoFrame>
      </CaseStudySection>

      <Note>
        <p>{olimpiadasDocentesCaseStudy.confidentialityNote}</p>
      </Note>

      <Link to="/#work" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
