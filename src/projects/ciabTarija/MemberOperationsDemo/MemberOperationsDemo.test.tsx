import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { MemberOperationsDemo } from '.';

describe('MemberOperationsDemo', () => {
  it('filters fictional members and updates the selected operational record', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <MemberOperationsDemo />
      </ThemeProvider>,
    );

    await user.type(
      screen.getByRole('textbox', { name: 'Buscar asociado ficticio' }),
      'Diego',
    );
    expect(screen.getByRole('button', { name: /Diego Fernández/ })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /María Álvarez/ }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Diego Fernández/ }));
    expect(screen.getByRole('heading', { name: 'Diego Fernández' })).toBeInTheDocument();
    expect(screen.getByText('1 cuota pendiente')).toBeInTheDocument();
  });

  it('changes the visible fictional workspace when an operational role is selected', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <MemberOperationsDemo />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Finanzas' }));
    expect(
      screen.getByRole('navigation', { name: 'Fictional Finanzas tools' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cuotas' })).toBeInTheDocument();
  });
});
