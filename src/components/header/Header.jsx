import { Link } from 'react-router-dom';
import logoImg from '@/assets/images/logo.png';
import test from '@/assets/icons/mypage-icon.gif';
import textLogo from '@/assets/images/starsync-text-logo.svg';
import * as S from './header.styles';

const Header = () => {
  return (
    <header css={S.headerWrapper}>
      <div css={S.headerContent}>
        <Link to="/" css={S.landingButton}>
          <img src={logoImg} alt="StarSync 이미지 로고" css={S.landingImage} />
        </Link>

        <Link to="/list" css={S.textLogoButton}>
          <img src={textLogo} alt="StarSync 텍스트 로고" css={S.textLogoImage} />
        </Link>

        <Link to="/mypage" css={S.profileButton}>
          <img src={test} alt="마이페이지" css={S.profileImage} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
