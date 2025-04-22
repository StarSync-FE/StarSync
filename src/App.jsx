import { Link, Outlet, useNavigation } from 'react-router-dom';
import { PendingUI } from './components/loadingStatus';

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle'; // 'loading' 또는 'submitting'
  console.log(navigation.state);

  return (
    <>
      {isLoading && <PendingUI />}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/mypage">My Page</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
