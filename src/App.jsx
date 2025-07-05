import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AlertManager } from './components/alertManager';
import { SplashScreen } from './components/loadingStatus';

const App = ({ router }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional polling without deps
  useEffect(() => {
    const splashScreenInterval = setInterval(() => {
      const navState = router.state.navigation.state;

      if (navState === 'idle') {
        setShowSplashScreen(false);
        clearInterval(splashScreenInterval);
      }
    }, 1000);

    return () => clearInterval(splashScreenInterval);
  }, []);

  return (
    <>
      <AlertManager />
      {showSplashScreen ? <SplashScreen /> : <RouterProvider router={router} />}
    </>
  );
};

export default App;
