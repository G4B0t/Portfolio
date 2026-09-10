import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { HomePage } from './index';

describe('HomePage', () => {
  it('renders the featured-work carousel', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Projects with intent.' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'PMCA' })).toBeInTheDocument();
    expect(screen.getByText('01 / 03')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Show previous project' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show next project' })).toBeInTheDocument();
  });
});
