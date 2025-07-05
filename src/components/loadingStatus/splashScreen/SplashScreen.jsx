import rollingStarImg from '@/assets/images/logo-star.png';
import logoImg from '@/assets/images/logo.png';
import * as S from './splashScreen.styles';

const SplashScreen = () => {
  return (
    <div css={S.splashWrapper}>
      <img src={rollingStarImg} alt="로고가 되기 위해 굴러가는 별" css={S.rollingStar} />
      <img src={logoImg} alt="완성된 로고" css={S.finalStar} />
    </div>
  );
};

export default SplashScreen;
