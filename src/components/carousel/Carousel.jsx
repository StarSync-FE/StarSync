import { ArrowButton } from '@/components/button';
import { Card } from '@/components/card';
import { useState } from 'react';
import { CAROUSEL } from '@/constants/carousel';
import * as S from './carousel.styles';

const Carousel = ({ data, setModalType, setSelectedIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 추가
  const itemsLength = data?.list?.length || 0;

  // 마지막 인덱스를 계산 (데이터가 10개라면 maxIndex는 6, 즉 마지막 페이지까지 고려)
  const maxIndex = Math.max(0, Math.ceil(itemsLength / CAROUSEL.ITEMS_VIEW) - 1);

  const handleNext = () => {
    if (isAnimating) return; // 애니메이션 중이면 클릭을 막음
    setIsAnimating(true); // 애니메이션 시작
    setCurrentIndex((prev) => Math.min(prev + CAROUSEL.ITEMS_VIEW, maxIndex * CAROUSEL.ITEMS_VIEW)); // 4개씩 이동
    setTimeout(() => setIsAnimating(false), 400); // 400ms 후에 애니메이션 완료 처리
  };

  const handlePrev = () => {
    if (isAnimating) return; // 애니메이션 중이면 클릭을 막음
    setIsAnimating(true); // 애니메이션 시작
    setCurrentIndex((prev) => Math.max(prev - CAROUSEL.ITEMS_VIEW, 0)); // 4개씩 이동
    setTimeout(() => setIsAnimating(false), 400); // 400ms 후에 애니메이션 완료 처리
  };

  const getSlideOffset = () => {
    const offset = currentIndex * (CAROUSEL.DESKTOP_ITEM_WIDTH + CAROUSEL.ITEM_GAP);
    // 마지막 인덱스에 대해서도 공백을 추가
    if (currentIndex === maxIndex) {
      return Math.min(
        offset,
        (itemsLength - CAROUSEL.ITEMS_VIEW) * (CAROUSEL.DESKTOP_ITEM_WIDTH + gap),
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
          disabled={currentIndex === 0 || isAnimating}
          styles={S.navigationButton(false, isAnimating)}
        />
        <div css={S.carouselContainer}>
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
          disabled={currentIndex >= maxIndex * CAROUSEL.ITEMS_VIEW || isAnimating}
          styles={S.navigationButton(true, isAnimating)}
        />
      </div>
    </div>
  );
};

export default Carousel;
