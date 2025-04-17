import { css } from '@emotion/react';

export const ModalWrapper = css({
  width: '477px',
  heigth: '693px',
  backgroundColor: '#181D26',
  borderRadius: '12px',
});
export const headerBox = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const voteRadioButton = css({
  margin: 'auto',
  width: '327px',
  height: '70px',
  paddingBottom: '8px',
});

export const exitIcon = css({
  width: '24px',
  height: '24px',
});

export const title = css({
  fontSize: '18px',
  fontWeight: 500,
  color: '#F7F7F8',
});

export const rankNumber = css({
  color: '#F96D69',
  fontSize: '14px',
  fontWeight: 400,
  padding: '0 12px',
});

export const memberInfoBox = css({
  display: 'flex',
  alignItems: 'center',
  '& p': {
    fontSize: '14px',
    margin: 0,
  },
});

export const voteBox = css({
  display: 'flex',
  flexDirection: 'column',
});

export const idolName = css({
  color: '#ffffff',
  fontWeight: 500,
});

export const votes = css({
  color: 'rgba(255, 255, 255, 0.6)',
  fontWeight: 400,
});

export const guideQuote = css({
  textAlign: 'center',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: 500,
});

export const highlightText = css({
  color: '#F96D69',
});
