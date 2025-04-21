import MococoImg from '@/assets/icons/mococo-no-background.png';
import CustomButton from '@/components/customButton';
import mockData from '@/data/mockData';
import { addCommas, getDaysRemaining, getDonationPercentage } from '@/utils/format';
import * as S from './card.styles';

const Card = () => {
  const test = mockData.donations[0];
  const daysLeft = getDaysRemaining(test.deadline);

  return (
    <article css={S.card}>
      {/* 그라디언트 오버레이 */}
      <div css={S.wrapper}>
        <div css={S.gradient} />

        {/* 이미지 figure의 margin는 임시 입니다.*/}
        <figure>
          <img src={test.idol.profilePicture} alt="큐티" css={S.image} />
        </figure>

        {/* 버튼 */}
        <CustomButton type="button" variant="carousel" style={S.button}>
          <img src={MococoImg} alt="모코코" css={S.icon} />
          기분 좋은 향이 솔솔~
        </CustomButton>
      </div>

      {/* 텍스트 및 진행 정보 */}
      <div css={S.content}>
        <div css={S.header}>
          <p css={S.subTitle}>{test.subtitle}</p>
          <h2 css={S.title}>{test.title}</h2>
        </div>

        <div css={S.info}>
          <div css={S.statusBar}>
            <div css={S.statusLeft}>
              <img src={MococoImg} alt="프리티" css={S.icon} />
              <p>{addCommas(test.receivedDonations)}</p>
            </div>
            <p>{daysLeft > 1 ? `D-${daysLeft}` : daysLeft === 1 ? '오늘 마감' : '마감 완료'}</p>
          </div>

          {/* 진행 바 */}
          <div css={S.progressBar}>
            <div css={S.progressFill} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
