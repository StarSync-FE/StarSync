import { useEffect, useState } from 'react';
import { Avatar } from '@/components/avatar';
import { CustomButton, RadioButton } from '@/components/button';
import { fetchCharts } from '@/api';
import { ENDPOINTS } from '@/constants/api';
import { showAlert } from '@/utils/alert';
import { requestPost } from '@/utils/api';
import { addCommas } from '@/utils/format';
import { LoadingSpinner } from '@/components/loadingStatus';
import * as S from './voteModal.styles';

const VoteModal = ({ gender, updateCredit, setVoteSuccessTrigger, setModalType }) => {
  const [idols, setIdols] = useState([]);
  const [checkedItem, setCheckedItem] = useState();
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const loadData = async (gender) => {
    setIsLoading(true); // 로딩 시작
    try {
      const response = await fetchCharts({ gender, limit: 30 });
      return response;
    } finally {
      setIsLoading(false); // 로딩 종료
    }
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
          setVoteSuccessTrigger((prev) => !prev);
          showAlert('투표에 성공했습니다', 'success');
        } else {
          showAlert('투표에 실패했습니다', 'warning');
        }
      } else {
        setModalType('creditLack');
      }
    } catch (err) {
      console.error('투표 중 오류 발생:', err);
      showAlert('투표 중 오류 발생', 'warning');
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!gender) return;
    const load = async () => {
      const result = await loadData(gender === 'females' ? 'female' : 'male');
      setIdols(result?.idols || []);
    };
    load();
  }, [gender, updateCredit]);

  return (
    <div css={S.ModalWrapper}>
      <h2 css={S.title}>이달의 {gender === 'females' ? '여자' : '남자'} 아이돌</h2>
      <LoadingSpinner isLoading={isLoading} />
      <div css={[S.itemsWrapper, S.scrollStyle]}>
        {
          idols.length > 0
            ? idols.map((idol) => (
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
                        <p css={S.votes}>{addCommas(idol.totalVotes)}표</p>
                      </div>
                    </div>
                  </RadioButton>
                </div>
              ))
            : !isLoading && <p>아이돌 데이터가 없습니다.</p> /* 로딩중 아닐때만 */
        }
      </div>
      <CustomButton
        onButtonClick={() =>
          checkedItem
            ? voteForIdol(checkedItem)
            : showAlert('투표할 아이돌을 선택해주세요', 'warning')
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (checkedItem) {
              voteForIdol(checkedItem);
            } else {
              showAlert('투표할 아이돌을 선택해주세요', 'warning');
            }
          }
        }}
        style={S.buttonStyle}
      >
        투표하기
      </CustomButton>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 스타</b>가 소요됩니다.
      </p>
    </div>
  );
};

export default VoteModal;
