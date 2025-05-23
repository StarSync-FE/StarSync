import { Link, useRouteError } from 'react-router-dom';
import { CustomButton } from '@/components/button';
import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import logoImg from '@/assets/images/logo.png';
import * as S from '@/pages/error/styles';

const NotFoundPage = () => {
  const error = useRouteError();
  const status = error?.status || STATUS_CODES.NOT_FOUND;
  const statusText = 'Page Not Found';
  const uiMessage = UI_ERRORS.PAGE.NOT_FOUND;

  console.error('🔍 에러 data:', error?.data);

  return (
    <div css={S.auroraStyle(S.notFoundColors)}>
      <div css={S.textStyle(S.notFoundColors[0], S.glow(S.notFoundColors))}>
        <h1>{status}</h1>
        <h2>{statusText}</h2>
        <p>{uiMessage}</p>
        <div css={S.buttonWrapper}>
          <Link to="/">
            <CustomButton variant="error" isRound="true" style={S.errorButtonStyle}>
              <img src={logoImg} alt="StarSync 로고" css={S.logoIconStyle} />
              StarSync 홈
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
