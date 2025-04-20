/** @jsxImportSource @emotion/react */
import * as S from './avatar.styles';

const Avatar = ({ imgUrl }) => {
  return <img src={imgUrl} alt="" css={S.image} />;
};

export default Avatar;
