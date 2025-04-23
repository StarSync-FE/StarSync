import logoImg from '@/assets/images/logo.png';
import textLogoImg from '@/assets/images/logo_text_temp.png';
import profileImg from '@/assets/images/stupid.png';
import { Link } from 'react-router-dom';
import * as S from './header.styles';

const Header = () => {
  return (
    <header css={S.headerWrapper}>
      <Link to="/" css={S.landingButton}>
        <img src={logoImg} alt="StarSync 이미지지 로고" css={S.landingImage} />
      </Link>

      <Link to="/list" css={S.textLogoButton}>
        <img src={textLogoImg} alt="StarSync 텍스트 로고" css={S.textLogoImage} />
      </Link>

      <Link to="/mypage" css={S.profileButton}>
        <img src={profileImg} alt="마이페이지" css={S.profileImage} />
      </Link>
    </header>
  );
};

export default Header;
