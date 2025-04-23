import MococoImg from '@/assets/icons/mococo-no-background.png';
import CustomButton from '@/components/customButton';
import mockData from '@/data/mockData';
import { addCommas, getDaysRemaining, getDonationPercentage } from '@/utils/format';
import { useEffect, useState } from 'react';
import * as S from './card.styles';

const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const test = mockData.donations[0];
  const daysLeft = getDaysRemaining(test.deadline);
  const percent = `${getDonationPercentage(test.targetDonation, test.receivedDonations)}%`;
  const isCompleted = daysLeft > 0;

  useEffect(() => {
    setIsActive(isCompleted);
  }, [isCompleted]);

  return (
    <article css={S.card}>
      <div css={S.wrapper}>
        <figure>
          <img src={test.idol.profilePicture} alt="큐티" css={S.image} />
        </figure>

        <CustomButton type="button" variant="carousel" style={S.button} disabled={!isActive}>
          <img src={MococoImg} alt="모코코" css={S.icon} />
          {isActive ? '후원하기' : '후원 마감'}
        </CustomButton>
      </div>

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

          <div css={S.progressBar}>
            <div css={S.progressFill(percent)} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
