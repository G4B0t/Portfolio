import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ApiValidationDemo } from '.';

describe('ApiValidationDemo', () => {
  it('updates the visible contract result when a scenario changes', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ApiValidationDemo />
      </ThemeProvider>,
    );

    expect(screen.getByText('Accepted')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Missing field' }));

    expect(screen.getByText('Rejected')).toBeInTheDocument();
    expect(screen.getByText('Validation response is explicit')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Missing field' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});
