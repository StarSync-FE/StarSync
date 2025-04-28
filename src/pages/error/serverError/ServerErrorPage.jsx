import { useRouteError } from 'react-router-dom';
import { CustomButton } from '@/components/button';
import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import * as S from '@/pages/error/styles';

const ServerErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || STATUS_CODES.SERVER_ERROR;
  const statusText = 'Internal Server Error';
  const uiMessage = UI_ERRORS.SERVER.DEFAULT;

  console.error('🔍 에러 data:', error?.data);

  return (
    <div css={S.auroraStyle(S.serverErrorColors)}>
      <div css={S.textStyle(S.serverErrorColors[0], S.glow(S.serverErrorColors))}>
        <h1>{status}</h1>
        <h2>{statusText}</h2>
        <p>{uiMessage}</p>
        <div css={S.buttonWrapper}>
          <CustomButton
            variant="error"
            isRound="true"
            style={S.errorButtonStyle}
            onButtonClick={() => window.location.reload()}
          >
            다시 시도
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorPage;
