import { Alert } from '@/components/alert';
import { Avatar } from '@/components/avatar';
import { CustomButton, RadioButton } from '@/components/button';
import { ENDPOINTS } from '@/constants/api';
import { requestGet, requestPost } from '@/utils/api';
import { addCommas } from '@/utils/format';
import { useEffect, useState } from 'react';
import * as S from './voteModal.styles';

const VoteModal = ({ gender, updateCredit, setModalType }) => {
  const [idols, setIdols] = useState([]);
  const [checkedItem, setCheckedItem] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [alertType, setAlertType] = useState('warning');
  const loadData = async (gender) => {
    const chartUrl = `${ENDPOINTS.GET_CHART}?gender=${gender}&pageSize=30&`;
    const response = await requestGet(chartUrl);
    return response;
  };
  const triggerAlert = (message, type = 'warning') => {
    setAlertContent(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
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
          triggerAlert('투표에 성공했습니다', 'success');
        } else {
          triggerAlert('투표에 실패했습니다', 'warning');
        }
      } else {
        setModalType('creditLack'); // 크레딧 부족 시 modalType 설정
      }
    } catch (err) {
      console.error('투표 중 오류 발생:', err);
      triggerAlert('투표 중 오류 발생', 'warning');
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
  }, [gender, updateCredit]);

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
                        <p css={S.votes}>{addCommas(idol.totalVotes)}표</p>
                      </div>
                    </div>
                  </RadioButton>
                </div>
              );
            })
          : console.log('idols state가 없습니다')}
      </div>
      <CustomButton
        onClick={() =>
          checkedItem ? voteForIdol(checkedItem) : triggerAlert('투표할 아이돌을 선택해주세요')
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (checkedItem) {
              voteForIdol(checkedItem);
            } else {
              triggerAlert('투표할 아이돌을 선택해주세요');
            }
          }
        }}
        style={S.buttonStyle}
      >
        투표하기
      </CustomButton>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 크레딧</b>이 소요됩니다.
      </p>
      {showAlert && <Alert content={alertContent} type={alertType} />}
    </div>
  );
};

export default VoteModal;
