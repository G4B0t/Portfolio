import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { navigation } from '@/content/navigation';
import { AppRouter } from './index';
describe('AppRouter', () => {
  it('renders the PMCA case study', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/work/pmca']}>
          <AppRouter />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'PMCA' })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Designing dependable interfaces for data-heavy financial workflows.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Technology stack')).toBeInTheDocument();
    expect(navigation.find((item) => item.label === 'Work')?.href).toBe('/#work');
  });

  it('renders the Viva Aerobus case study', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/work/viva-aerobus']}>
          <AppRouter />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Viva Aerobus' })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Delivering dependable API changes for operational airline workflows.',
      ),
    ).toBeInTheDocument();
  });
});
