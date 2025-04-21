import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './avatar.styles';

const Avatar = ({ imgUrl, isSelected }) => {
  return (
    <>
      <div
        css={[isSelected && S.imageSelected, S.imageWrapper]}
        onClick={() => setIsSelected(true)}
        onKeyDown={() => setIsSelected(true)}
      >
        <img src={imgUrl} alt="" css={S.image} />
      </div>
    </>
  );
};

export default Avatar;
