import React from 'react';
import * as S from './starFrame.styles';

const StarFrame = ({ imageUrl }) => {
  return (
    <div css={S.wrapper}>
      <img src={imageUrl} alt="content" />
      <div css={S.frame} />
    </div>
  );
};

export default StarFrame;
