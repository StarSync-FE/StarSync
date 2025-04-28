import { useState, useEffect } from 'react';
import { ArrowButton } from '@/components/button';
import { Card } from '@/components/card';
import { CAROUSEL } from '@/constants/carousel';
import * as S from './carousel.styles';

const Carousel = ({ data, setModalType, setSelectedIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsView, setItemsView] = useState(CAROUSEL.ITEMS_VIEW); // 동적으로 ITEMS_VIEW 값을 설정
  const itemsLength = data?.list?.length || 0;

  useEffect(() => {
    const updateItemsView = () => {
      if (window.innerWidth >= 1200) {
        setItemsView(3); // 1200px 이상에서는 3개
      } else if (window.innerWidth >= 1000) {
        setItemsView(2); // 1000px 이상에서는 2개
      } else {
        setItemsView(1); // 그 외에는 1개
      }
    };

    updateItemsView(); // 컴포넌트가 마운트 될 때 바로 실행
    window.addEventListener('resize', updateItemsView); // 화면 크기 변경 시에도 실행

    return () => {
      window.removeEventListener('resize', updateItemsView); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []); // 빈 배열을 주어 한 번만 실행되도록 설정

  const maxIndex = Math.max(0, Math.ceil(itemsLength / itemsView) - 1);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsView, maxIndex * itemsView));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsView, 0));
  };

  const getSlideOffset = () => {
    const offset = currentIndex * (CAROUSEL.DESKTOP_ITEM_WIDTH + CAROUSEL.ITEM_GAP);
    if (currentIndex === maxIndex) {
      return Math.min(
        offset,
        (itemsLength - CAROUSEL.ITEMS_VIEW) * (CAROUSEL.DESKTOP_ITEM_WIDTH + CAROUSEL.ITEM_GAP),
      );
    }
    return offset;
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
              <div css={S.notthingTitle}>현재 등록된 후원이 없습니다.</div>
            )}
          </div>
        </div>
        <ArrowButton
          direction="right"
          onButtonClick={handleNext}
          disabled={currentIndex >= maxIndex * CAROUSEL.ITEMS_VIEW}
          styles={S.navigationButton(true)}
        />
      </div>
    </div>
  );
};

export default Carousel;
