import Avatar from '@/components/avatar/Avatar';
import CustomButton from '@/components/customButton';
import RadioButton from '@/components/radioButton/RadioButton';
import { ENDPOINTS } from '@/constants/api';
import { requestGet, requestPost } from '@/utils/api';
import { useEffect, useState } from 'react';
import * as S from './voteModal.styles';

const VoteModal = ({ gender, updateCredit, setModalType }) => {
  const [idols, setIdols] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState();
  const [checkedItem, setCheckedItem] = useState();
  const loadData = async (gender) => {
    const chartUrl = `${ENDPOINTS.GET_CHART}?gender=${gender}&pageSize=30&`;
    const response = await requestGet(chartUrl);
    return response;
  };
  const voteForIdol = async (idolId) => {
    const voteUrl = `${ENDPOINTS.REGISTER_VOTE}`;
    const getCredit = localStorage.getItem('selectedCredit');
    try {
      if (Number(getCredit) >= 1000) {
        const response = await requestPost(voteUrl, { idolId: idolId });
        if (response) {
          localStorage.setItem('selectedCredit', Number(getCredit) - 1000);
          updateCredit(Number(getCredit) - 1000);
        } else {
          alert('투표에 실패했습니다');
        }
      } else {
        setModalType('creditLack'); // 크레딧 부족 시 modalType 설정
      }
    } catch (err) {
      console.error('투표 중 오류 발생:', err);
      alert('투표 처리 중 오류가 발생했습니다');
    }
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
  return (
    <div css={S.ModalWrapper}>
      <h2 css={S.title}>이달의 {gender === 'females' ? '여자' : '남자'} 아이돌</h2>
      <div css={[S.itemsWrapper, S.scrollStyle]}>
        {idols.length > 0
          ? idols.map((idol) => {
              return (
                <div key={idol.name} css={S.idolItem}>
                  <RadioButton
                    style={S.voteRadioButton}
                    itemLabel={'voteGirlsIdol'}
                    name={`voteGirlsIdol-${idol.name}`}
                    handleSelect={() => {
                      setCheckedItem(idol.id);
                    }}
                  >
                    <div css={S.memberInfoBox}>
                      <Avatar
                        imgUrl={idol.profilePicture}
                        style={S.avatar}
                        isSelected={checkedItem === idol.id}
                      />
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
      <CustomButton
        onClick={() => (checkedItem ? voteForIdol(checkedItem) : null)}
        onKeyDown={(e) => e.key === 'Enter' && checkedItem && voteForIdol(checkedItem)}
        style={S.buttonStyle}
      >
        투표하기
      </CustomButton>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 크레딧</b>이 소요됩니다.
      </p>
    </div>
  );
};

export default VoteModal;
