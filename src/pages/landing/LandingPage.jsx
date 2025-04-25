import CustomButton from '@/components/customButton';
import { Link } from 'react-router-dom';
import * as S from './landingPage.styles';

const LandingPage = () => {
  const handleClearStorage = () => {
    localStorage.clear();
  };

  return (
    <div css={S.landingWrapper}>
      <Link to="/list" onClick={handleClearStorage}>
        <CustomButton type="button" variant="landing">
          지금 시작하기
        </CustomButton>
      </Link>
    </div>
  );
};

export default LandingPage;
