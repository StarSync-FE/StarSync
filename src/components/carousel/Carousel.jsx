import { ArrowButton } from '@/components/button';
import { Card } from '@/components/card';
import { getItemMetrics } from '@/utils/carousel';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './carousel.styles';

const Carousel = ({ data, setModalType, setSelectedIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef(null);

  // data.list의 길이를 사용
  const itemsLength = data?.list?.length || 0;

  const updateItemsPerView = useCallback(() => {
    if (!containerRef.current) return;

    const viewportWidth = containerRef.current.offsetWidth;
    const { itemWidth, gap } = getItemMetrics();
    const totalItemWidth = itemWidth + gap;
    const calculatedItemsPerView = Math.floor(viewportWidth / totalItemWidth);

    setItemsPerView(calculatedItemsPerView);
    const newMaxIndex = Math.max(0, itemsLength - calculatedItemsPerView);
    setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
  }, [itemsLength]);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [updateItemsPerView]);

  const maxIndex = Math.max(0, itemsLength - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getSlideOffset = () => {
    const { itemWidth, gap } = getItemMetrics();
    return currentIndex * (itemWidth + gap);
  };

  return (
    <div css={S.wrapper}>
      <h2 css={S.carouselTitle}>후원을 기다리는 조공</h2>
      <div css={S.viewportArea}>
        <ArrowButton
          direction="left"
          onButtonClick={handlePrev}
          disabled={currentIndex === 0}
          styles={S.navigationButton}
        />
        <div ref={containerRef} css={S.carouselContainer}>
          <div
            css={S.carouselTrack}
            style={{
              '--slide-offset': `-${getSlideOffset()}px`,
            }}
          >
            {data?.list?.length > 0 ? (
              data.list.map((item, index) => (
                <div key={item.id} css={S.carouselItem}>
                  <Card
                    data={item}
                    setModalType={setModalType}
                    setSelectedIndex={setSelectedIndex}
                    index={index}
                  />
                </div>
              ))
            ) : (
              <div>표시할 항목이 없습니다</div>
            )}
          </div>
        </div>
        <ArrowButton
          direction="right"
          onButtonClick={handleNext}
          disabled={currentIndex >= maxIndex}
        />
      </div>
    </div>
  );
};

export default Carousel;
