import { Outlet } from 'react-router-dom';
import VoteModal from './components/voteModal';

function App() {
  return (
    <main>
      <Outlet />
      <VoteModal />
    </main>
  );
}

export default App;
