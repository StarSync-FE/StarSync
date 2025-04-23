import { css } from '@emotion/react';
import { useNavigation } from 'react-router-dom';
import * as S from './pendingUI.styles';

const stars = [
  { id: 1, top: '10%', left: '15%', width: 30, height: 30 },
  { id: 2, top: '70%', left: '80%', width: 40, height: 40 },
  { id: 3, top: '50%', left: '10%', width: 20, height: 20 },
  { id: 4, top: '20%', left: '30%', width: 50, height: 50 },
  { id: 5, top: '10%', left: '80%', width: 30, height: 30 },
  { id: 6, top: '80%', left: '20%', width: 30, height: 30 },
  { id: 7, top: '85%', left: '85%', width: 25, height: 25 },
  { id: 8, top: '5%', left: '50%', width: 35, height: 35 },
  { id: 9, top: '60%', left: '60%', width: 20, height: 20 },
  { id: 10, top: '40%', left: '70%', width: 30, height: 30 },
  { id: 11, top: '25%', left: '5%', width: 20, height: 20 },
  { id: 12, top: '90%', left: '45%', width: 30, height: 30 },
  { id: 13, top: '50%', left: '90%', width: 30, height: 30 },
];

const PendingUI = ({ children }) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return isLoading ? (
    <div css={S.pendingStyle}>
      <div css={S.backgroundStarsStyle}>
        {stars.map(({ id, top, left, width, height }) => (
          <div
            key={id}
            css={css`
              ${S.baseStarStyle};
              top: ${top};
              left: ${left};
              width: ${width}px;
              height: ${height}px;
            `}
          />
        ))}
      </div>
    </div>
  ) : (
    children
  );
};

export default PendingUI;
