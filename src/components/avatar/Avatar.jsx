import * as S from './avatar.styles';

const Avatar = ({ imgUrl, isSelected = false, profileSize, onSelectToggle, style }) => {
  return (
    <div
      css={[isSelected && S.imageSelected, S.imageWrapper(profileSize), style]}
      onClick={onSelectToggle}
      onKeyDown={onSelectToggle}
    >
      <img src={imgUrl} alt="" css={S.image} />
    </div>
  );
};

export default Avatar;
