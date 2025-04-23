import logoText from '@/assets/images/logo_text_temp.png';
import profileImg from '@/assets/images/stupid.png';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './header.styles';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (pathname === '/list') {
      window.location.reload();
    } else {
      navigate('/list');
    }
  };

  const handleProfileClick = () => {
    if (pathname === '/mypage') {
      window.location.reload();
    } else {
      navigate('/mypage');
    }
  };

  return (
    <header css={S.headerWrapper}>
      <button type="button" css={S.logoButton} onClick={handleLogoClick}>
        <img src={logoText} alt="StarSync 로고" css={S.logoImage} />
      </button>
      <button type="button" css={S.profileButton} onClick={handleProfileClick}>
        <img src={profileImg} alt="마이페이지" css={S.profileImage} />
      </button>
    </header>
  );
};

export default Header;
