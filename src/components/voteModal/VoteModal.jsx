import * as mockData from '@/data/mockData';

import Avatar from '@/components/avatar/Avatar';
import RadioButton from '@/components/radioButton/RadioButton';
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './voteModal.styles';

const VoteModal = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div css={S.ModalWrapper}>
      {mockData.girls.map((girl) => {
        return (
          <RadioButton
            style={S.voteRadioButton}
            key={girl.name}
            itemLabel={'voteGirlsIdol'}
            name={`voteGirlsIdol-${girl.name}`}
            onSelect={() => setIsSelected(true)}
          >
            <div css={S.memberInfoBox}>
              <Avatar imgUrl={girl.img} />
              <span css={S.rankNumber}>{girl.rank}</span>
              <div css={S.voteBox}>
                <p css={S.idolName}>{girl.name}</p>
                <p css={S.votes}>{girl.votes}표</p>
              </div>
            </div>
          </RadioButton>
        );
      })}
      <button type="button">투표하기</button>
      <p css={S.guideQuote}>
        투표하는 데 <b css={S.highlightText}>1000 크레딧</b>이 소요됩니다.
      </p>
    </div>
  );
};

export default VoteModal;
