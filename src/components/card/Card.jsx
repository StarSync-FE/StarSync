import { useEffect, useState } from 'react';
import { CustomButton } from '@/components/button';
import starImg from '@/assets/images/logo.png';
import { addCommas, getDaysRemaining, getDonationPercentage } from '@/utils/format';
import * as S from './card.styles';

const Card = ({ data, setModalType, setSelectedIndex, index }) => {
  const [daysLeft, setDaysLeft] = useState(getDaysRemaining(data.deadline));
  const percent = `${getDonationPercentage(data.targetDonation, data.receivedDonations)}%`;
  const isDonationAvailable = daysLeft > 0;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const interval = setInterval(() => {
      const newDaysLeft = getDaysRemaining(data.deadline);
      setDaysLeft(newDaysLeft);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setSelectedIndex(index);
    setModalType('donation');
  };

  return (
    <article css={S.card}>
      <div css={S.wrapper}>
        <figure>
          <img src={data.idol.profilePicture} alt={data.idol.name} css={S.image} />
        </figure>

        <CustomButton
          type="button"
          variant="carousel"
          style={S.button}
          disabled={!isDonationAvailable}
          onButtonClick={handleClick}
        >
          {isDonationAvailable ? '후원하기' : '후원 마감'}
        </CustomButton>
      </div>

      <div css={S.content}>
        <div css={S.header}>
          <p>{data.subtitle}</p>
          <h2>{data.title}</h2>
        </div>

        <div css={S.info}>
          <div css={S.statusBar}>
            <div css={S.statusLeft}>
              <img src={starImg} alt="크레딧" css={S.icon} />
              <p>{`${addCommas(data.receivedDonations)} / ${addCommas(data.targetDonation)}`}</p>
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
