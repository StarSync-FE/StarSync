import { Outlet } from 'react-router-dom';
import VoteModal from './components/voteModal/VoteModal';

function App() {
  return (
    <main>
      <Outlet />
      <VoteModal />
    </main>
  );
}

export default App;
