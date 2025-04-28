import { useEffect, useState } from 'react';

const getScreenSize = () => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width <= 375) return 'mobile';
  if (width <= 744) return 'tablet';
  return 'desktop';
};

/**
 * 화면 크기에 따라 'mobile', 'tablet', 또는 'desktop'을 반환하는 커스텀 훅입니다.
 * 윈도우의 크기를 기준으로 화면 크기를 동적으로 추적합니다.
 *
 * @returns {string} 현재 화면 크기. 'mobile', 'tablet', 'desktop' 중 하나를 반환합니다.
 *
 * @example
 * const screenSize = useScreenSize();
 * console.log(screenSize); // 'mobile', 'tablet', 또는 'desktop'
 */
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};
