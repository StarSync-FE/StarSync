import CustomButton from '@/components/customButton';
import { Link } from 'react-router-dom';
import * as S from './landingPage.styles';

const stars = [
  { id: 1, top: '10%', left: '15%', width: 30, height: 30 },
  { id: 2, top: '70%', left: '80%', width: 40, height: 40 },
  { id: 3, top: '50%', left: '10%', width: 20, height: 20 },
  { id: 4, top: '20%', left: '30%', width: 50, height: 50 },
  { id: 5, top: '10%', left: '80%', width: 30, height: 30 },
  { id: 6, top: '80%', left: '20%', width: 30, height: 30 },
  { id: 7, top: '85%', left: '85%', width: 25, height: 25 },
  { id: 8, top: '5%', left: '50%', width: 35, height: 35 },
  { id: 9, top: '60%', left: '60%', width: 20, height: 20 },
  { id: 10, top: '40%', left: '70%', width: 30, height: 30 },
  { id: 11, top: '25%', left: '5%', width: 20, height: 20 },
  { id: 12, top: '90%', left: '45%', width: 30, height: 30 },
  { id: 13, top: '50%', left: '90%', width: 30, height: 30 },
];

const LandingPage = () => {
  const handleClearStorage = () => {
    localStorage.clear();
  };

  return (
    <div css={S.auroraBackground}>
      <div css={S.backgroundStarsWrapper}>
        {stars.map((star) => (
          <div key={star.id} css={S.starStyle(star)} />
        ))}
      </div>
      <section css={S.contentSection}>
        <h1>팬들과 아이돌을 잇는 새로운 방식</h1>
        <p>후원과 투표를 통해 아이돌을 응원하세요. 당신의 선택이 그들의 무대가 됩니다.</p>
        <Link to="/list" onClick={handleClearStorage}>
          <CustomButton type="button" variant="landing">
            지금 시작하기
          </CustomButton>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
