import * as S from './chart.styles';

const ChartTabButtons = ({ selectedTab, handleTabClick }) => (
  <div css={S.tabButtonWrapper}>
    <button
      type="button"
      css={[S.idolListButton, selectedTab === 'females' && S.activeButton]}
      value="females"
      onClick={handleTabClick}
    >
      이달의 여자 아이돌
    </button>
    <button
      type="button"
      css={[S.idolListButton, selectedTab === 'males' && S.activeButton]}
      value="males"
      onClick={handleTabClick}
    >
      이달의 남자 아이돌
    </button>
  </div>
);

export default ChartTabButtons;
