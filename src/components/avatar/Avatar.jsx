import * as S from './avatar.styles';

const Avatar = ({ imgUrl, isSelected = true, profileSize, onSelectToggle }) => {
  return (
    <div
      css={[isSelected && S.imageSelected, S.imageWrapper(profileSize)]}
      onClick={onSelectToggle}
      onKeyDown={onSelectToggle}
    >
      <img src={imgUrl} alt="" css={S.image} />
    </div>
  );
};

export default Avatar;
