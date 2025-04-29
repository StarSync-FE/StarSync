import { useState, useEffect } from 'react';
import { ArrowButton } from '@/components/button';
import { Card } from '@/components/card';
import { CAROUSEL } from '@/constants/carousel';
import * as S from './carousel.styles';

const Carousel = ({ data, setModalType, setSelectedIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsView, setItemsView] = useState(CAROUSEL.ITEMS_VIEW);
  const itemsLength = data?.list?.length || 0;

  useEffect(() => {
    const updateItemsView = () => {
      if (window.innerWidth < 1000) {
        setItemsView(CAROUSEL.ITEMS_VIEW);
      } else if (window.innerWidth < 1200) {
        setItemsView(3);
      } else if (window.innerWidth < 1920) {
        setItemsView(4);
      }
    };

    updateItemsView();
    window.addEventListener('resize', updateItemsView);

    return () => {
      window.removeEventListener('resize', updateItemsView);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsView;
      return nextIndex >= itemsLength ? prev : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsView, 0));
  };

  const getSlideOffset = () => {
    return currentIndex * (CAROUSEL.DESKTOP_ITEM_WIDTH + CAROUSEL.ITEM_GAP);
  };

  return (
    <div css={S.wrapper}>
      <h2 css={S.carouselTitle}>후원을 기다리는 조공</h2>
      <div css={S.viewportArea}>
        <ArrowButton
          direction="left"
          onButtonClick={handlePrev}
          disabled={currentIndex === 0}
          styles={S.navigationButton(false)}
        />
        <div css={S.carouselContainer}>
          <div css={S.carouselTrack(getSlideOffset())}>
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
              <div css={S.nothingTitle}>현재 등록된 후원이 없습니다.</div>
            )}
          </div>
        </div>
        <ArrowButton
          direction="right"
          onButtonClick={handleNext}
          disabled={currentIndex + itemsView >= itemsLength}
          styles={S.navigationButton(true)}
        />
      </div>
    </div>
  );
};

export default Carousel;
