/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const image = css({
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  border: '4px solid #181D26',
  boxShadow: '0 0 0 1px #F96D69',
  boxSizing: 'border-box',
  objectFit: 'cover',
});

const Avatar = ({ imgUrl }) => {
  return <img src={imgUrl} alt="" css={image} />;
};

export default Avatar;
