import { Card } from '@/components/card';
import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './carousel.styles';

const Carousel = ({ data: initialData, setModalType }) => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchLatestDonations = async () => {
      try {
        const response = await requestGet(ENDPOINTS.GET_DONATIONS);
        if (response?.list) {
          setData(response);
        }
      } catch (error) {
        console.error('캐러셀 업데이트 실패', error);
      }
    };
    setData(initialData);

    const intervalId = setInterval(fetchLatestDonations, 5000);

    return () => clearInterval(intervalId);
  }, [initialData]);

  // data.list의 길이를 사용
  const donationsLength = data?.list?.length || 0;

  const updateItemsPerView = useCallback(() => {
    if (!containerRef.current) return;

    const viewportWidth = containerRef.current.offsetWidth;
    const isMobile = window.innerWidth < 768;
    const itemWidth = isMobile ? 158 : 282;
    const gap = 12;
    const totalItemWidth = itemWidth + gap;
    const calculatedItemsPerView = Math.floor(viewportWidth / totalItemWidth);

    setItemsPerView(calculatedItemsPerView);
    const newMaxIndex = Math.max(0, donationsLength - calculatedItemsPerView);
    setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
  }, [donationsLength]);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [updateItemsPerView]);

  const maxIndex = Math.max(0, donationsLength - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getSlideOffset = () => {
    const isMobile = window.innerWidth < 768;
    const itemWidth = isMobile ? 158 : 282;
    const gap = 12;
    return currentIndex * (itemWidth + gap);
  };

  return (
    <div css={S.wrapper}>
      <h2 css={S.carouselTitle}>후원을 기다리는 조공</h2>
      <div css={S.viewportArea}>
        <button
          type="button"
          onClick={handlePrev}
          css={S.navigationButton}
          disabled={currentIndex === 0}
          aria-label="이전"
        >
          <svg css={S.arrowIcon} viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
            <title>이전</title>
            <path d="M7 1L1 7L7 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div ref={containerRef} css={S.carouselContainer}>
          <div
            css={S.carouselTrack}
            style={{
              '--slide-offset': `-${getSlideOffset()}px`,
            }}
          >
            {data?.list?.map((item) => (
              <div key={item.id} css={S.carouselItem}>
                <Card data={item} setModalType={setModalType} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          css={S.navigationButton}
          disabled={currentIndex >= maxIndex}
          aria-label="다음"
        >
          <svg css={S.arrowIcon} viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
            <title>다음</title>
            <path d="M1 1L7 7L1 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
