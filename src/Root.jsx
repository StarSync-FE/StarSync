import { Header } from '@/components/header';
import { LAYOUT } from '@/constants/layout';
import { Link, Outlet, useLocation, useNavigation } from 'react-router-dom';
import { PendingUI } from './components/loadingStatus/pendingUI';

function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle'; // 'loading' 또는 'submitting'

  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  return (
    <>
      {isLoading && <PendingUI />}
      {!isLanding && <Header />}
      <main style={{ paddingTop: !isLanding ? `${LAYOUT.HEADER_HEIGHT}px` : 0 }}>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
