import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { CycleExplorerDemo } from '.';

describe('CycleExplorerDemo', () => {
  it('updates the visible cycle state when a phase is selected', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <CycleExplorerDemo />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: /Liquid displacement$/ }));

    expect(screen.getByText('Lift in progress')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Gas energy displaces the liquid column and changes the cycle flow state.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Liquid displacement$/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});
