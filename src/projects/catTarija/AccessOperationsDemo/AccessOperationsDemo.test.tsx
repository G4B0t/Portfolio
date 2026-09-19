import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AccessOperationsDemo } from '.';

describe('AccessOperationsDemo', () => {
  it('updates the role-specific menu and permissions', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <AccessOperationsDemo />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Caja 1' }));

    expect(
      screen.getByRole('navigation', { name: 'Fictional Caja 1 menu' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Apertura de caja' })).toBeInTheDocument();
    expect(screen.getByText('Cerrar jornada')).toBeInTheDocument();
  });

  it('changes a fictional user role through the access record', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <AccessOperationsDemo />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: /Marco Vela/ }));
    await user.selectOptions(screen.getByLabelText('Rol ficticio asignado'), 'Secretaría');

    expect(screen.getByRole('button', { name: /Marco Vela/ })).toHaveTextContent('Secretaría');
    expect(
      screen.getByRole('navigation', { name: 'Fictional Secretaría menu' }),
    ).toBeInTheDocument();
  });
});
