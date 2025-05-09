import * as S from './chart.styles';
import starImg from '@/assets/images/star.png';
import logoImg from '@/assets/images/logo.png';

const IdolList = ({ chartData = [] }) => (
  <ul css={S.idolList}>
    {chartData.length === 0 ? (
      <li css={S.emptyState}>표시할 데이터가 없습니다</li>
    ) : (
      chartData.map((idol, index) => (
        <li key={idol.id} css={S.idolData}>
          <span>
            <div css={S.firstStyle}>
              {index === 0 && <img src={starImg} alt="1등" css={S.starIcon} />}
              <img src={idol.profilePicture} alt={idol.name} css={S.profileStyle} />
            </div>
            <span css={S.rankStyle}>{index + 1}</span>
            <div css={S.idolContent}>
              <span css={S.groupStyle}>{idol.group}</span>
              <div css={S.nameContent}>
                <span css={S.nameStyle}>{idol.name}</span>
                {index === 0 && <img src={logoImg} alt="1등" css={S.starNameIcon} />}
              </div>
            </div>
          </span>
          <span>
            <div css={S.voteStyle}>{idol.totalVotes}</div>
            <div>표</div>
          </span>
        </li>
      ))
    )}
  </ul>
);

export default IdolList;
