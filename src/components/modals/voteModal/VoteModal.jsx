import { Alert } from '@/components/alert';
import Avatar from '@/components/avatar/Avatar';
import CustomButton from '@/components/customButton';
import RadioButton from '@/components/radioButton/RadioButton';
import { ENDPOINTS } from '@/constants/api';
import { requestGet, requestPost } from '@/utils/api';
import { addCommas } from '@/utils/format';
import { useEffect, useState } from 'react';
import * as S from './voteModal.styles';

const VoteModal = ({ gender, updateCredit }) => {
  const [idols, setIdols] = useState([]);
  const [checkedItem, setCheckedItem] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const loadData = async (gender) => {
    const chartUrl = `${ENDPOINTS.GET_CHART}?gender=${gender}&pageSize=30&`;
    const response = await requestGet(chartUrl);
    return response;
  };
  const triggerAlert = (message) => {
    setAlertContent(message);
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
        } else {
          triggerAlert('투표에 실패했습니다');
        }
      } else {
        alert('크레딧이 부족합니다');
      }
    } catch (err) {
      console.error('투표 중 오류 발생:', err);
      triggerAlert('투표 처리 중 오류가 발생했습니다');
    }
    throw Error;
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
        style={S.buttonStyle}
        onClick={() => {
          checkedItem ? voteForIdol(checkedItem) : triggerAlert('투표할 아이돌을 선택해주세요');
        }}
      >
        투표하기
      </CustomButton>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 크레딧</b>이 소요됩니다.
      </p>
      {showAlert && <Alert content={alertContent} />}
    </div>
  );
};

export default VoteModal;
