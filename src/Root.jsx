import { Header } from '@/components/header';
import { LAYOUT } from '@/constants/layout';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { Footer } from './components/footer';
import { PendingUI } from './components/loadingStatus/pendingUI';

function Root() {
  const navigation = useNavigation();
  const location = useLocation();

  const currentPath = location.pathname;
  const nextPath = navigation.location?.pathname;
  const isSamePath = currentPath === nextPath;

  const isLoading = navigation.state !== 'idle' && !isSamePath;

  const isLanding = currentPath === '/';

  return (
    <>
      {isLoading && <PendingUI />}
      {!isLanding && <Header />}

      <main
        style={{
          paddingTop: !isLanding ? `${LAYOUT.HEADER_HEIGHT}px` : 0,
        }}
      >
        <Outlet />
      </main>

      {!isLanding && <Footer />}
    </>
  );
}

export default Root;
