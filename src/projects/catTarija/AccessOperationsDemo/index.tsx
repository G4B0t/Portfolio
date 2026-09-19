import {
  BadgeCheck,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  ActivityCard,
  DemoFrame,
  DetailPanel,
  PermissionList,
  RoleTabs,
  Status,
  UserList,
  UserRow,
  Workspace,
} from './styles';

type Role = 'Administrador' | 'Caja 1' | 'Secretaría';

type User = {
  id: number;
  name: string;
  role: Role;
  state: 'Activo' | 'Cambio de clave pendiente';
};

const roleDetails: Record<Role, { area: string; menu: string[]; permissions: string[] }> = {
  Administrador: {
    area: 'Administración del sistema',
    menu: ['Usuarios', 'Roles y permisos', 'Procesos del sistema'],
    permissions: ['Crear y actualizar usuarios', 'Asignar roles', 'Configurar procesos'],
  },
  'Caja 1': {
    area: 'Módulo Caja',
    menu: ['Apertura de caja', 'Asiento diario', 'Cierre de caja'],
    permissions: ['Abrir Caja 1', 'Registrar movimiento diario', 'Cerrar jornada'],
  },
  Secretaría: {
    area: 'Operaciones administrativas',
    menu: ['Afiliaciones', 'Documentos', 'Seguimiento'],
    permissions: ['Consultar registros', 'Actualizar documentación', 'Dar seguimiento'],
  },
};

const initialUsers: User[] = [
  { id: 1, name: 'Elena Rojas', role: 'Administrador', state: 'Activo' },
  { id: 2, name: 'Marco Vela', role: 'Caja 1', state: 'Activo' },
  { id: 3, name: 'Clara Méndez', role: 'Secretaría', state: 'Cambio de clave pendiente' },
];

export function AccessOperationsDemo() {
  const [activeRole, setActiveRole] = useState<Role>('Administrador');
  const [users, setUsers] = useState(initialUsers);
  const [selectedId, setSelectedId] = useState(1);

  const selectedUser = useMemo(
    () => users.find((user) => user.id === selectedId) ?? users[0],
    [selectedId, users],
  );
  const details = roleDetails[activeRole];

  const updateSelectedRole = (role: Role) => {
    setUsers((current) =>
      current.map((user) => (user.id === selectedId ? { ...user, role } : user)),
    );
    setActiveRole(role);
  };

  return (
    <DemoFrame aria-label="Fictional role and access management demonstration">
      <RoleTabs aria-label="Fictional active role">
        {(Object.keys(roleDetails) as Role[]).map((role) => (
          <button
            key={role}
            type="button"
            data-active={activeRole === role}
            onClick={() => setActiveRole(role)}
          >
            {role}
          </button>
        ))}
      </RoleTabs>

      <Workspace>
        <aside>
          <div className="workspace-label">
            <ShieldCheck aria-hidden="true" size={18} />
            <span>Rol activo</span>
          </div>
          <strong>{activeRole}</strong>
          <small>{details.area}</small>
          <nav aria-label={`Fictional ${activeRole} menu`}>
            {details.menu.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'active' : ''}>
                {item}
              </button>
            ))}
          </nav>
          <span className="fictional-note">Demostración con datos ficticios</span>
        </aside>

        <main>
          <header>
            <div>
              <span>Acceso y operaciones</span>
              <h3>Espacio condicionado por rol</h3>
            </div>
            <Status>Sesión protegida</Status>
          </header>

          <div className="overview">
            <ActivityCard>
              <LockKeyhole aria-hidden="true" size={19} />
              <span>Autenticación</span>
              <strong>Credenciales y sesión</strong>
            </ActivityCard>
            <ActivityCard>
              <KeyRound aria-hidden="true" size={19} />
              <span>Permisos activos</span>
              <strong>{details.permissions.length} procesos</strong>
            </ActivityCard>
            <ActivityCard>
              <WalletCards aria-hidden="true" size={19} />
              <span>Operación</span>
              <strong>{activeRole === 'Caja 1' ? 'Caja asignada' : 'Acceso contextual'}</strong>
            </ActivityCard>
          </div>

          <section className="content-grid">
            <div>
              <div className="section-heading">
                <div>
                  <span>Usuarios ficticios</span>
                  <h4>Gestión de identidades</h4>
                </div>
                <UsersRound aria-hidden="true" size={19} />
              </div>
              <UserList aria-label="Fictional user list">
                {users.map((user) => (
                  <UserRow
                    key={user.id}
                    type="button"
                    $selected={selectedUser.id === user.id}
                    onClick={() => setSelectedId(user.id)}
                  >
                    <span>{user.name}</span>
                    <small>{user.role}</small>
                  </UserRow>
                ))}
              </UserList>
            </div>

            <DetailPanel aria-live="polite">
              <div className="section-heading">
                <div>
                  <span>Ficha de acceso</span>
                  <h4>{selectedUser.name}</h4>
                </div>
                <BadgeCheck aria-hidden="true" size={19} />
              </div>
              <label>
                Rol asignado
                <select
                  aria-label="Rol ficticio asignado"
                  value={selectedUser.role}
                  onChange={(event) => updateSelectedRole(event.target.value as Role)}
                >
                  {(Object.keys(roleDetails) as Role[]).map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>
              <p>{selectedUser.state}</p>
              <PermissionList aria-label={`${activeRole} fictional permissions`}>
                {details.permissions.map((permission) => (
                  <li key={permission}>
                    <BadgeCheck aria-hidden="true" size={14} /> {permission}
                  </li>
                ))}
              </PermissionList>
            </DetailPanel>
          </section>
        </main>
      </Workspace>
    </DemoFrame>
  );
}
