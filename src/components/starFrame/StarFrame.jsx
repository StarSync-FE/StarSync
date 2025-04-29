import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import * as S from './starFrame.styles';

const StarFrame = ({ imageUrls = [], interval = 3000 }) => {
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) return;

    const timer = setInterval(() => {
      setFrameCount((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [imageUrls, interval]);

  if (imageUrls.length === 0) {
    return null;
  }

  const currentImage =
    imageUrls.length > 1 ? imageUrls[frameCount % imageUrls.length] : imageUrls[0];

  const isAnimated = imageUrls.length > 1;

  return (
    <div css={S.wrapper}>
      {isAnimated ? (
        <motion.img
          key={frameCount}
          src={currentImage}
          alt="content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            mass: 1.2,
          }}
        />
      ) : (
        <motion.img
          key={currentImage} // ⭐ (currentImage로 키를 줘야 처음 1회만 트리거)
          src={currentImage}
          alt="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'tween', // 부드럽게
            duration: 1.5, // 1.5초 동안 fade-in
            ease: 'easeOut', // 끝날 때 자연스럽게
          }}
          css={S.image} // 필요하면 스타일 적용
        />
      )}
      <div css={S.frame} />
    </div>
  );
};

export default StarFrame;
