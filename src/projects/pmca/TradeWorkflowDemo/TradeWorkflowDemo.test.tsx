import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { TradeWorkflowDemo } from '.';

function renderDemo() {
  return render(
    <ThemeProvider>
      <TradeWorkflowDemo />
    </ThemeProvider>,
  );
}

describe('TradeWorkflowDemo', () => {
  it('switches workflow queues and exposes fictional records', async () => {
    const user = userEvent.setup();
    renderDemo();

    await user.click(screen.getByRole('button', { name: /ready for execution/i }));

    expect(screen.getByText('TX-003')).toBeInTheDocument();
    expect(screen.queryByText('TX-001')).not.toBeInTheDocument();
  });

  it('tracks change counts and validation feedback for local edits', async () => {
    const user = userEvent.setup();
    renderDemo();

    const amount = screen.getByLabelText('Amount for TX-001');
    await user.clear(amount);
    await user.type(amount, 'not a number');

    expect(screen.getByText('Needs correction')).toBeInTheDocument();
    expect(screen.getByLabelText('Updated records')).toHaveTextContent('1');

    await user.clear(amount);
    await user.type(amount, '2,500');

    expect(screen.queryByText('Needs correction')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Updated records')).toHaveTextContent('1');

    await user.click(screen.getByLabelText('Select TX-001'));
    await user.click(screen.getByRole('button', { name: /mark deleted/i }));

    expect(screen.getByLabelText('Deleted records')).toHaveTextContent('1');
  });
});
