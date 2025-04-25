import creditImg from '@/assets/images/credit.png';
import CustomButton from '@/components/customButton';
import * as S from './donationModal.styles';

const DonationModal = ({ data, onClose }) => {
  const handleClick = () => {
    console.log('후원 성공');
    onClose();
  };

  return (
    <div css={S.modalContent}>
      <h2>후원하기</h2>
      <div css={S.wrapper}>
        <figure>
          <img src={data.idol.profilePicture} alt={data.idol.name} />
        </figure>
        <div css={S.titleContent}>
          <p>{data.subtitle}</p>
          <h3>{data.title}</h3>
        </div>
      </div>
      <div css={S.inputContent}>
        <img src={creditImg} alt="크레딧" />
        <input placeholder="크레딧 입력" />
      </div>
      <CustomButton onClick={handleClick}>후원하기</CustomButton>
    </div>
  );
};

export default DonationModal;
