import { Plus, Search, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  ChangeSet,
  DemoLabel,
  DemoTable,
  EmptyState,
  ExceptionRoute,
  Panel,
  PrimarySteps,
  Step,
  StepConnector,
  Status,
  Tab,
  TableViewport,
  Tabs,
  Toolbar,
  ExceptionRoutes,
} from './styles';

type TabId = 'approval' | 'execution' | 'pending' | 'mismatch' | 'executed' | 'cancelled';
type Lifecycle = 'persisted' | 'new' | 'updated' | 'deleted';
type DemoRow = {
  id: string;
  date: string;
  type: string;
  state: TabId;
  amount: string;
  lifecycle: Lifecycle;
  invalid?: boolean;
};

const tabs: { id: TabId; label: string }[] = [
  { id: 'approval', label: 'For approval' },
  { id: 'execution', label: 'Ready for execution' },
  { id: 'pending', label: 'Pending execution' },
  { id: 'mismatch', label: 'Needs review' },
  { id: 'executed', label: 'Executed' },
  { id: 'cancelled', label: 'Cancelled' },
];
const primarySteps: {
  id: Extract<TabId, 'approval' | 'execution' | 'pending' | 'executed'>;
  label: string;
}[] = [
  { id: 'approval', label: 'Approval' },
  { id: 'execution', label: 'Ready' },
  { id: 'pending', label: 'In progress' },
  { id: 'executed', label: 'Executed' },
];
const initialRows: DemoRow[] = [
  {
    id: 'TX-001',
    date: '2025-01-14',
    type: 'Record alpha',
    state: 'approval',
    amount: '2,400',
    lifecycle: 'persisted',
  },
  {
    id: 'TX-002',
    date: '2025-01-15',
    type: 'Record beta',
    state: 'approval',
    amount: '1,800',
    lifecycle: 'persisted',
  },
  {
    id: 'TX-003',
    date: '2025-01-15',
    type: 'Record gamma',
    state: 'execution',
    amount: '3,100',
    lifecycle: 'persisted',
  },
  {
    id: 'TX-004',
    date: '2025-01-16',
    type: 'Record alpha',
    state: 'pending',
    amount: '980',
    lifecycle: 'persisted',
  },
  {
    id: 'TX-005',
    date: '2025-01-16',
    type: 'Record beta',
    state: 'mismatch',
    amount: '1,120',
    lifecycle: 'persisted',
    invalid: true,
  },
  {
    id: 'TX-006',
    date: '2025-01-17',
    type: 'Record gamma',
    state: 'executed',
    amount: '4,200',
    lifecycle: 'persisted',
  },
];

export function TradeWorkflowDemo() {
  const [activeTab, setActiveTab] = useState<TabId>('approval');
  const [rows, setRows] = useState(initialRows);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const activePrimaryIndex = primarySteps.findIndex((step) => step.id === activeTab);
  const highlightedStepIndex = activePrimaryIndex === -1 ? 2 : activePrimaryIndex;
  const visibleRows = useMemo(
    () =>
      rows.filter(
        (row) =>
          row.state === activeTab &&
          row.lifecycle !== 'deleted' &&
          row.id.toLowerCase().includes(query.toLowerCase()),
      ),
    [activeTab, query, rows],
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        tabs.map((tab) => [
          tab.id,
          rows.filter((row) => row.state === tab.id && row.lifecycle !== 'deleted')
            .length,
        ]),
      ) as Record<TabId, number>,
    [rows],
  );
  const changes = useMemo(
    () => ({
      new: rows.filter((row) => row.lifecycle === 'new').length,
      updated: rows.filter((row) => row.lifecycle === 'updated').length,
      deleted: rows.filter((row) => row.lifecycle === 'deleted').length,
    }),
    [rows],
  );
  const updateAmount = (id: string, value: string) =>
    setRows((current) =>
      current.map((row) =>
        row.id !== id
          ? row
          : {
              ...row,
              amount: value,
              invalid: !/^[0-9]+([,][0-9]{3})*$/.test(value),
              lifecycle: row.lifecycle === 'new' ? 'new' : 'updated',
            },
      ),
    );
  const toggleSelection = (id: string) =>
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  const addRow = () =>
    setRows((current) => [
      ...current,
      {
        id: `TX-${String(current.length + 1).padStart(3, '0')}`,
        date: '2025-01-18',
        type: 'New record',
        state: 'approval',
        amount: '0',
        lifecycle: 'new',
      },
    ]);
  const markSelectedDeleted = () => {
    setRows((current) =>
      current.map((row) =>
        selectedIds.includes(row.id) ? { ...row, lifecycle: 'deleted' } : row,
      ),
    );
    setSelectedIds([]);
  };
  return (
    <Panel>
      <DemoLabel>Interactive workflow demonstration · fictional records</DemoLabel>
      <PrimarySteps aria-label="Fictional notification workflow">
        {primarySteps.map((step, index) => (
          <Step
            key={step.id}
            type="button"
            $active={index === highlightedStepIndex && activeTab !== 'cancelled'}
            $complete={index < highlightedStepIndex && activeTab !== 'cancelled'}
            onClick={() => {
              setActiveTab(step.id);
              setSelectedIds([]);
            }}
          >
            <b>{index + 1}</b>
            <span>{step.label}</span>
            {index < primarySteps.length - 1 && <StepConnector aria-hidden="true" />}
          </Step>
        ))}
      </PrimarySteps>
      <ExceptionRoutes aria-label="Exception workflow routes">
        <span>Exception routes</span>
        {tabs
          .filter((tab) => tab.id === 'mismatch' || tab.id === 'cancelled')
          .map((tab) => (
            <ExceptionRoute
              key={tab.id}
              type="button"
              $active={activeTab === tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedIds([]);
              }}
            >
              {tab.label}
            </ExceptionRoute>
          ))}
      </ExceptionRoutes>
      <Tabs aria-label="Select a workflow state">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            type="button"
            $active={activeTab === tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedIds([]);
            }}
          >
            <b>{counts[tab.id]}</b>
            {tab.label}
          </Tab>
        ))}
      </Tabs>
      <Toolbar>
        <label>
          <Search size={15} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter fictional records"
            aria-label="Filter fictional records"
          />
        </label>
        <div>
          <button type="button" onClick={addRow}>
            <Plus size={15} /> Add record
          </button>
          <button
            type="button"
            disabled={!selectedIds.length}
            onClick={markSelectedDeleted}
          >
            <Trash2 size={15} /> Mark deleted
          </button>
        </div>
      </Toolbar>
      <TableViewport>
        <DemoTable>
          <thead>
            <tr>
              <th>
                <span className="sr-only">Select</span>
              </th>
              <th>Record</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    aria-label={`Select ${row.id}`}
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => toggleSelection(row.id)}
                  />
                </td>
                <td>{row.id}</td>
                <td>{row.date}</td>
                <td>{row.type}</td>
                <td>
                  <input
                    aria-label={`Amount for ${row.id}`}
                    value={row.amount}
                    onChange={(event) => updateAmount(row.id, event.target.value)}
                    aria-invalid={row.invalid || undefined}
                  />
                  {row.invalid && <small>Use a whole positive amount</small>}
                </td>
                <td>
                  <Status $state={row.invalid ? 'mismatch' : row.state}>
                    {row.invalid
                      ? 'Needs correction'
                      : tabs.find((tab) => tab.id === row.state)?.label}
                  </Status>
                </td>
              </tr>
            ))}
          </tbody>
        </DemoTable>
      </TableViewport>
      {visibleRows.length === 0 && (
        <EmptyState>No fictional records match this workflow state.</EmptyState>
      )}
      <ChangeSet aria-label="Local change set">
        <span>CHANGESET</span>
        <div>
          <b>
            NEW <i>{changes.new}</i>
          </b>
          <b>
            UPDATED <i>{changes.updated}</i>
          </b>
          <b>
            DELETED <i>{changes.deleted}</i>
          </b>
        </div>
      </ChangeSet>
    </Panel>
  );
}
