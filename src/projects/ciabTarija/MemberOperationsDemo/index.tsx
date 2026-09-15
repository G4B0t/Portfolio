import { FileCheck2, Search, UserRoundCheck, WalletCards } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  DemoFrame,
  DetailPanel,
  MemberList,
  MemberRow,
  RoleTabs,
  Status,
  SummaryCard,
  SummaryGrid,
  Toolbar,
  Workspace,
} from './styles';

type Role = 'Administración' | 'Socios' | 'Finanzas';
type MemberStatus = 'Al día' | 'Requiere seguimiento';

type Member = {
  id: number;
  name: string;
  registry: string;
  status: MemberStatus;
  balance: string;
  lastActivity: string;
};

const members: Member[] = [
  {
    id: 1,
    name: 'María Álvarez',
    registry: 'A-0142',
    status: 'Al día',
    balance: 'Sin saldo pendiente',
    lastActivity: 'Registro actualizado',
  },
  {
    id: 2,
    name: 'Diego Fernández',
    registry: 'A-0187',
    status: 'Requiere seguimiento',
    balance: '1 cuota pendiente',
    lastActivity: 'Cuenta revisada',
  },
  {
    id: 3,
    name: 'Lucía Romero',
    registry: 'A-0204',
    status: 'Al día',
    balance: 'Sin saldo pendiente',
    lastActivity: 'Certificado emitido',
  },
  {
    id: 4,
    name: 'Tomás Suárez',
    registry: 'A-0221',
    status: 'Requiere seguimiento',
    balance: '2 cuotas pendientes',
    lastActivity: 'Datos por validar',
  },
];

const roleLabels: Record<Role, string[]> = {
  Administración: ['Usuarios y roles', 'Datos institucionales', 'Directivas'],
  Socios: ['Registro de asociados', 'Estado de cuenta', 'Documentos'],
  Finanzas: ['Cuotas', 'Ingresos', 'Recibos'],
};

export function MemberOperationsDemo() {
  const [role, setRole] = useState<Role>('Socios');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(1);

  const visibleMembers = useMemo(
    () =>
      members.filter((member) =>
        `${member.name} ${member.registry}`
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()),
      ),
    [query],
  );
  const selectedMember = members.find((member) => member.id === selectedId) ?? members[0];

  return (
    <DemoFrame aria-label="Fictional membership operations demonstration">
      <RoleTabs aria-label="Fictional operational role">
        {(Object.keys(roleLabels) as Role[]).map((item) => (
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

      <Workspace>
        <aside>
          <span>Área de trabajo</span>
          <strong>{role}</strong>
          <nav aria-label={`Fictional ${role} tools`}>
            {roleLabels[role].map((label, index) => (
              <button key={label} type="button" className={index === 0 ? 'active' : ''}>
                {label}
              </button>
            ))}
          </nav>
          <small>Demostración con datos ficticios</small>
        </aside>

        <main>
          <header>
            <div>
              <span>Gestión de asociados</span>
              <h3>Estado operativo</h3>
            </div>
            <Status $status="Al día">Datos de muestra</Status>
          </header>

          <SummaryGrid>
            <SummaryCard>
              <UserRoundCheck aria-hidden="true" size={19} />
              <span>Registro</span>
              <strong>Asociados y estado</strong>
            </SummaryCard>
            <SummaryCard>
              <WalletCards aria-hidden="true" size={19} />
              <span>Cuenta</span>
              <strong>Cuotas y recibos</strong>
            </SummaryCard>
            <SummaryCard>
              <FileCheck2 aria-hidden="true" size={19} />
              <span>Documentos</span>
              <strong>Emisión y verificación</strong>
            </SummaryCard>
          </SummaryGrid>

          <Toolbar>
            <label>
              <Search aria-hidden="true" size={16} />
              <span className="sr-only">Buscar asociado ficticio</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nombre o registro"
              />
            </label>
            <span>{visibleMembers.length} registros ficticios</span>
          </Toolbar>

          <MemberList aria-label="Fictional member list">
            {visibleMembers.map((member) => (
              <MemberRow
                key={member.id}
                type="button"
                $selected={selectedMember.id === member.id}
                onClick={() => setSelectedId(member.id)}
              >
                <span>{member.registry}</span>
                <strong>{member.name}</strong>
                <Status $status={member.status}>{member.status}</Status>
              </MemberRow>
            ))}
          </MemberList>

          <DetailPanel aria-live="polite">
            <div>
              <span>Ficha operativa</span>
              <h4>{selectedMember.name}</h4>
              <small>{selectedMember.registry} · Registro ficticio</small>
            </div>
            <dl>
              <div>
                <dt>Cuenta</dt>
                <dd>{selectedMember.balance}</dd>
              </div>
              <div>
                <dt>Última actividad</dt>
                <dd>{selectedMember.lastActivity}</dd>
              </div>
              <div>
                <dt>Verificación</dt>
                <dd>Lista para emitir documento</dd>
              </div>
            </dl>
          </DetailPanel>
        </main>
      </Workspace>
    </DemoFrame>
  );
}
