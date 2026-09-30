import { useMemo, useState } from 'react';
import { Check, Medal, QrCode, RotateCcw, ScanLine, Users } from 'lucide-react';
import { dbEncuentroCaseStudy as content } from '../content';
import {
  AccreditationGrid,
  CheckInList,
  ControlBar,
  Credential,
  Demo,
  DemoHeader,
  Leaderboard,
  MetricGrid,
  ParticipantList,
  Phase,
  PrimaryAction,
  Progress,
  TabList,
} from './styles';

type View = 'overview' | 'accreditation' | 'check-in';

interface Participant {
  id: number;
  name: string;
  institution: string;
  discipline: string;
  category: string;
  checkedIn: boolean;
}

const participants: Participant[] = [
  {
    id: 1,
    name: 'Maya Serrano',
    institution: 'Northstar University',
    discipline: 'Athletics · 400 m',
    category: 'Senior',
    checkedIn: true,
  },
  {
    id: 2,
    name: 'Leo Ferris',
    institution: 'Summit Institute',
    discipline: 'Swimming · 50 m',
    category: 'Open',
    checkedIn: true,
  },
  {
    id: 3,
    name: 'Noa Calder',
    institution: 'Aurora College',
    discipline: 'Chess · Individual',
    category: 'Master',
    checkedIn: false,
  },
  {
    id: 4,
    name: 'Iris Vega',
    institution: 'Northstar University',
    discipline: 'Volleyball · Team',
    category: 'Open',
    checkedIn: false,
  },
];

const standings = [
  { institution: 'Northstar University', gold: 8, silver: 5, bronze: 4 },
  { institution: 'Summit Institute', gold: 6, silver: 7, bronze: 3 },
  { institution: 'Aurora College', gold: 4, silver: 3, bronze: 7 },
];

const views: { id: View; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'accreditation', label: 'Accreditation' },
  { id: 'check-in', label: 'Check-in' },
];

export function OperationsDemo() {
  const [view, setView] = useState<View>('overview');
  const [selectedId, setSelectedId] = useState(participants[0].id);
  const [checkedInIds, setCheckedInIds] = useState(
    participants
      .filter((participant) => participant.checkedIn)
      .map((participant) => participant.id),
  );

  const selectedParticipant =
    participants.find((participant) => participant.id === selectedId) ?? participants[0];
  const nextParticipant = participants.find(
    (participant) => !checkedInIds.includes(participant.id),
  );
  const checkedInParticipants = useMemo(
    () => participants.filter((participant) => checkedInIds.includes(participant.id)),
    [checkedInIds],
  );

  const scanNext = () => {
    if (!nextParticipant) return;
    setCheckedInIds((current) => [...current, nextParticipant.id]);
  };

  const resetDemo = () => {
    setCheckedInIds(
      participants
        .filter((participant) => participant.checkedIn)
        .map((participant) => participant.id),
    );
  };

  return (
    <Demo>
      <DemoHeader>
        <div>
          <span>Event workspace</span>
          <h3>Interuniversity Encounter 2026</h3>
        </div>
        <Phase>
          <i aria-hidden="true" /> Competition phase
        </Phase>
      </DemoHeader>

      <ControlBar>
        <TabList aria-label="Event control views">
          {views.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={view === item.id}
              onClick={() => setView(item.id)}
            >
              {item.label}
            </button>
          ))}
        </TabList>
        <small>{content.demo.note}</small>
      </ControlBar>

      {view === 'overview' && (
        <div>
          <MetricGrid>
            <article>
              <Users size={18} aria-hidden="true" />
              <span>Accredited</span>
              <strong>286</strong>
              <small>Across 12 delegations</small>
            </article>
            <article>
              <Check size={18} aria-hidden="true" />
              <span>Checked in</span>
              <strong>{checkedInIds.length}/4</strong>
              <small>Demo reception queue</small>
            </article>
            <article>
              <Medal size={18} aria-hidden="true" />
              <span>Completed events</span>
              <strong>18</strong>
              <small>9 results pending</small>
            </article>
          </MetricGrid>
          <Leaderboard>
            <header>
              <div>
                <span>Live standings</span>
                <h4>University medal table</h4>
              </div>
              <div className="legend">
                <b>G</b>
                <b>S</b>
                <b>B</b>
              </div>
            </header>
            {standings.map((entry, index) => (
              <article key={entry.institution}>
                <strong>0{index + 1}</strong>
                <span>{entry.institution}</span>
                <div>
                  <b>{entry.gold}</b>
                  <b>{entry.silver}</b>
                  <b>{entry.bronze}</b>
                </div>
              </article>
            ))}
          </Leaderboard>
        </div>
      )}

      {view === 'accreditation' && (
        <AccreditationGrid>
          <div>
            <header>
              <span>Approved participants</span>
              <b>{participants.length} records</b>
            </header>
            <ParticipantList aria-label="Fictional accredited participants">
              {participants.map((participant) => (
                <button
                  key={participant.id}
                  type="button"
                  aria-pressed={selectedId === participant.id}
                  onClick={() => setSelectedId(participant.id)}
                >
                  <span>
                    {participant.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div>
                    <strong>{participant.name}</strong>
                    <small>{participant.discipline}</small>
                  </div>
                  <Check size={15} aria-label="Eligible" />
                </button>
              ))}
            </ParticipantList>
          </div>
          <Credential aria-live="polite">
            <header>
              <Medal size={17} aria-hidden="true" />
              <span>EVENT ACCESS · 2026</span>
            </header>
            <div className="credential-body">
              <div className="portrait" aria-hidden="true">
                {selectedParticipant.name.charAt(0)}
              </div>
              <div className="qr" aria-label="Illustrative QR code">
                <QrCode size={62} />
              </div>
              <div className="identity">
                <span>Accredited participant</span>
                <strong>{selectedParticipant.name}</strong>
                <small>{selectedParticipant.institution}</small>
              </div>
              <dl>
                <div>
                  <dt>Discipline</dt>
                  <dd>{selectedParticipant.discipline}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{selectedParticipant.category}</dd>
                </div>
              </dl>
            </div>
            <footer>Fictional credential · Portfolio demonstration</footer>
          </Credential>
        </AccreditationGrid>
      )}

      {view === 'check-in' && (
        <CheckInList>
          <div className="scan-panel">
            <ScanLine size={38} aria-hidden="true" />
            <span>Reception station</span>
            <h4>
              {nextParticipant
                ? `Ready for ${nextParticipant.name}`
                : 'Reception queue complete'}
            </h4>
            <p>
              {nextParticipant
                ? 'Simulate a valid credential scan to register the next arrival.'
                : 'Every participant in this fictional queue has been received.'}
            </p>
            <PrimaryAction type="button" disabled={!nextParticipant} onClick={scanNext}>
              <QrCode size={17} aria-hidden="true" /> Scan next credential
            </PrimaryAction>
            <button className="reset" type="button" onClick={resetDemo}>
              <RotateCcw size={14} aria-hidden="true" /> Reset demo
            </button>
          </div>
          <div className="reception-log">
            <header>
              <div>
                <span>Reception log</span>
                <strong>{checkedInParticipants.length} received</strong>
              </div>
              <Progress
                aria-label={`${checkedInParticipants.length} of ${participants.length} received`}
              >
                <i
                  style={{
                    width: `${(checkedInParticipants.length / participants.length) * 100}%`,
                  }}
                />
              </Progress>
            </header>
            {checkedInParticipants.map((participant) => (
              <article key={participant.id}>
                <Check size={16} aria-hidden="true" />
                <div>
                  <strong>{participant.name}</strong>
                  <small>{participant.institution}</small>
                </div>
                <span>Received</span>
              </article>
            ))}
          </div>
        </CheckInList>
      )}
    </Demo>
  );
}
