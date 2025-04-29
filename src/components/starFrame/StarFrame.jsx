import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import * as S from './starFrame.styles';
import { spring } from 'motion';
const StarFrame = ({ imageUrls = [], interval = 3000 }) => {
  const [frameCount, setFrameCount] = useState(0);
  const generator = spring({ keyframes: [0, 100] });
  useEffect(() => {
    if (imageUrls.length === 0) return;

    const timer = setInterval(() => {
      setFrameCount((prev) => prev + 1); // 무조건 프레임을 계속 증가
    }, interval);

    return () => clearInterval(timer);
  }, [imageUrls, interval]);

  if (imageUrls.length === 0) {
    return null;
  }

  const currentImage =
    imageUrls.length > 1
      ? imageUrls[frameCount % imageUrls.length] // 여러개면 순환
      : imageUrls[0]; // 하나만 있으면 고정

  return (
    <div css={S.wrapper}>
      <motion.img
        key={frameCount} // ⭐ frameCount를 key로! 계속 바뀐다!
        src={currentImage}
        alt="content"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 24,
          mass: 1.2,
        }}
      />
      <div css={S.frame} />
    </div>
  );
};

export default StarFrame;
