import logoImg from '@/assets/images/logo.png';
import rollingStarImg from '@/assets/images/logo_star.png';
import * as S from './splashScreen.styles';

function SplashScreen() {
  return (
    <div css={S.splashWrapper}>
      <img src={rollingStarImg} alt="로고가 되기 위해 굴러가는 별" css={S.rollingStar} />
      <img src={logoImg} alt="완성된 로고" css={S.finalStar} />
    </div>
  );
}

export default SplashScreen;
