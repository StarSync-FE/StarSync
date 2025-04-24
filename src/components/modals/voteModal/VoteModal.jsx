import Avatar from '@/components/avatar/Avatar';
import RadioButton from '@/components/radioButton/RadioButton';
import { ENDPOINTS } from '@/constants/api';
import { mockData } from '@/data/mockData';
import { requestGet } from '@/utils/api';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import * as S from './voteModal.styles';

const VoteModal = ({ gender = 'female' }) => {
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
      const result = await loadData(gender === 'girls' ? 'female' : 'male');
      setIdols(result.idols);
      console.log(`${gender === 'girls' ? '여자' : '남자'} 아이돌`, result.idols);
    };
    load();
  }, [gender]);
  return (
    <div css={S.ModalWrapper}>
      {/* {idols.length > 0
        ? idols.map((idol) => {
            return (
              <RadioButton
                style={S.voteRadioButton}
                key={idol.name}
                itemLabel={'voteGirlsIdol'}
                name={`voteGirlsIdol-${idol.name}`}
                onSelect={() => setIsSelected(true)}
              >
                <div css={S.memberInfoBox}>
                  <Avatar imgUrl={idol.img} />
                  <span css={S.rankNumber}>{idol.rank}</span>
                  <div css={S.voteBox}>
                    <p css={S.idolName}>{idol.name}</p>
                    <p css={S.votes}>{idol.votes}표</p>
                  </div>
                </div>
              </RadioButton>
            );
          })
        : console.log('idols가 없음')}
      <button type="button">투표하기</button>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 크레딧</b>이 소요됩니다.
      </p> */}
    </div>
  );
};

export default VoteModal;
