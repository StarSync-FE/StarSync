import { css } from '@emotion/react';

export const buttonArea = css({
  borderBottom: 'solid 1px #FFFFFF1A',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& input[type="radio"]': {
    appearance: 'none',
    width: '16px',
    height: '16px',
    border: '1px solid #8C92AB',

    borderRadius: '50%',
    outline: 'none',
    cursor: 'pointer',
  },
  '& input[type="radio"]:checked': {
    backgroundColor: '#F96D69',
    border: '4px solid #ffffff',
    boxShadow: '0 0 0 1px #F96D69',
  },
});
