import Avatar from '@/components/avatar/Avatar';
import CustomButton from '@/components/customButton';
import RadioButton from '@/components/radioButton/RadioButton';
import { ENDPOINTS } from '@/constants/api';
import { requestGet } from '@/utils/api';
import { useEffect, useState } from 'react';
import * as S from './voteModal.styles';

const VoteModal = ({ gender }) => {
  const [idols, setIdols] = useState([]);
  const loadData = async (gender) => {
    const chartUrl = `${ENDPOINTS.GET_CHART}?gender=${gender}&pageSize=30&`;
    const response = await requestGet(chartUrl);
    return response;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!gender) return;

    const load = async () => {
      const result = await loadData(gender === 'females' ? 'female' : 'male');
      setIdols(result.idols);
    };
    load();
  }, [gender]);
  console.log(idols);
  return (
    <div css={S.ModalWrapper}>
      <h2 css={S.title}>이달의 여자 아이돌</h2>
      <div css={[S.itemsWrapper, S.scrollStyle]}>
        {idols.length > 0
          ? idols.map((idol) => {
              return (
                <div key={idol.name} css={S.idolItem}>
                  <RadioButton
                    style={S.voteRadioButton}
                    itemLabel={'voteGirlsIdol'}
                    name={`voteGirlsIdol-${idol.name}`}
                    onSelect={() => setIsSelected(true)}
                  >
                    <div css={S.memberInfoBox}>
                      <Avatar imgUrl={idol.profilePicture} style={S.avatar} />
                      <span css={S.rankNumber}>{idol.rank}</span>
                      <div css={S.voteBox}>
                        <p css={S.idolName}>{idol.name}</p>
                        <p css={S.votes}>{idol.totalVotes}표</p>
                      </div>
                    </div>
                  </RadioButton>
                </div>
              );
            })
          : console.log('idols가 없음')}
      </div>
      <CustomButton style={S.buttonStyle}>투표하기</CustomButton>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 크레딧</b>이 소요됩니다.
      </p>
    </div>
  );
};

export default VoteModal;
