import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { OperationsDemo } from './index';

describe('OperationsDemo', () => {
  it('switches participants in the accreditation credential', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <OperationsDemo />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Accreditation' }));
    await user.click(screen.getByRole('button', { name: /Noa Calder/ }));

    expect(screen.getAllByText('Noa Calder')).toHaveLength(2);
    expect(screen.getByText('Aurora College')).toBeInTheDocument();
    expect(screen.getAllByText('Chess · Individual')).toHaveLength(2);
  });

  it('registers the next fictional arrival', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <OperationsDemo />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Check-in' }));
    expect(screen.getByText('2 received')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Scan next credential' }));

    expect(screen.getByText('3 received')).toBeInTheDocument();
    expect(screen.getByText('Ready for Iris Vega')).toBeInTheDocument();
  });
});
