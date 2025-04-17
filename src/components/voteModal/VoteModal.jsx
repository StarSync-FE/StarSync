import iconUrl from '../../assets/icons/exit-icon.png';
import * as mockData from './mockData';

import { useState } from 'react';
import Avatar from '../avatar/Avatar';
import RadioButton from '../radioButton/RadioButton';
/** @jsxImportSource @emotion/react */
import * as S from './voteModal.styles';

const VoteModal = () => {
  return (
    <div css={S.ModalWrapper}>
      {mockData.girls.map((item) => {
        return (
          <RadioButton style={S.voteRadioButton} key={item.name} itemLabel={'voteGirlsIdol'}>
            <div css={S.memberInfoBox}>
              <Avatar imgUrl={item.img} />
              <span css={S.rankNumber}>{item.rank}</span>
              <div css={S.voteBox}>
                <p css={S.idolName}>{item.name}</p>
                <p css={S.votes}>{item.votes}표</p>
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
