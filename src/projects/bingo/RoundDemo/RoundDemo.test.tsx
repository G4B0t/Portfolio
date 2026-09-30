import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { RoundDemo } from './index';

function setup() {
  render(
    <ThemeProvider>
      <RoundDemo />
    </ThemeProvider>,
  );
  return userEvent.setup();
}

describe('RoundDemo', () => {
  it('checks the incomplete card, clears stale review, and stops at a completed sequence', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: 'Check card' }));
    expect(screen.getByRole('status')).toHaveTextContent('4 numbers still missing');

    const next = screen.getByRole('button', { name: 'Call next number' });
    await user.click(next);
    expect(screen.getByRole('status')).not.toHaveTextContent('incomplete');
    for (let index = 0; index < 3; index++) await user.click(next);

    await user.click(screen.getByRole('button', { name: 'Check card' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Card complete: all 25 numbers have been called.',
    );
    expect(next).toBeDisabled();
    expect(within(screen.getByRole('table')).getAllByText('Called')).toHaveLength(25);
  });

  it('resets the history, matches, and review before starting a fresh round', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: 'Check card' }));
    await user.click(screen.getByRole('button', { name: 'Reset round' }));
    expect(
      screen.getByText('0 numbers called · 0 / 25 card matches'),
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole('table')).queryByText('Called'),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('status')).not.toHaveTextContent('incomplete');

    await user.click(screen.getByRole('button', { name: 'Call next number' }));
    expect(
      screen.getByText('1 numbers called · 1 / 25 card matches'),
    ).toBeInTheDocument();
    await user.click(screen.getByText('Call history (1)'));
    expect(
      within(screen.getByRole('list', { name: 'Numbers in call order' })).getAllByRole(
        'listitem',
      ),
    ).toHaveLength(1);
  });
});
