import { Header } from '@/components/header';
import { LAYOUT } from '@/constants/layout';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  return (
    <>
      {!isLanding && <Header />}
      <main style={{ paddingTop: !isLanding ? `${LAYOUT.HEADER_HEIGHT}px` : 0 }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
