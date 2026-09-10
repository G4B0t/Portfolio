import type { RouteObject } from 'react-router-dom';
import { RootLayout } from '@/app/layouts/RootLayout';
import { CaseStudyPage } from '@/pages/CaseStudyPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work/:slug', element: <CaseStudyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
