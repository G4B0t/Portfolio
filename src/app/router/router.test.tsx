import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AppRouter } from './index';
describe('AppRouter', () => {
  it('renders a case-study placeholder route', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/work/pmca']}>
          <AppRouter />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'PMCA' })).toBeInTheDocument();
    expect(screen.getByText('Case study in preparation')).toBeInTheDocument();
  });
});
