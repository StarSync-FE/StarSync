import exitIcon from '@/assets/icons/exit-icon-black.png';
import Avatar from '@/components/avatar';
import * as S from './avatarButton.styles';

const AvatarButton = ({ imgUrl, boxSize }) => {
  return (
    <div css={S.avatarWrapper}>
      <div css={S.avatarBox(boxSize)}>
        <button type="button" css={S.exitButton}>
          <img src={exitIcon} css={S.buttonImage} alt="exitIcon" />
        </button>
        <Avatar imgUrl={imgUrl} isSelected={false} />
      </div>
    </div>
  );
};

export default AvatarButton;
