import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import * as S from '@/pages/error/styles';
import { useRouteError } from 'react-router-dom';

const ServerErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || STATUS_CODES.SERVER_ERROR;
  const statusText = 'Internal Server Error';
  const uiMessage = UI_ERRORS.SERVER;

  console.error('🔍 에러 data:', error?.data);

  return (
    <div css={S.auroraStyle(S.serverErrorColors)}>
      <div css={S.textStyle(S.serverErrorColors[0], S.glow(S.serverErrorColors))}>
        <h1>{status}</h1>
        <h2>{statusText}</h2>
        <p>{uiMessage}</p>
      </div>
    </div>
  );
};

export default ServerErrorPage;
