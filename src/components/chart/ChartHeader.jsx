import { CustomButton } from '@/components/button';
import chartImg from '@/assets/images/chart.png';
import * as S from './chart.styles';

const ChartHeader = ({ setModalType }) => (
  <div css={S.chartSectionHeader}>
    <div>이달의 차트</div>
    <CustomButton variant="vote" onButtonClick={() => setModalType('vote')} style={S.voteButton}>
      <img src={chartImg} alt="차트" />
      <span>차트 투표하기</span>
    </CustomButton>
  </div>
);

export default ChartHeader;
