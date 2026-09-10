import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { ScrollTopLink } from '@/components/common/ScrollTopLink';
export function RootLayout() {
  return (
    <div id="page-top">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTopLink />
    </div>
  );
}
