
import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import * as S from '@/pages/error/styles';
import { useRouteError } from 'react-router-dom';

const ServerErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || STATUS_CODES.SERVER_ERROR;
  const message = error?.statusText || 'Internal Server Error';
  const data = error?.data || UI_ERRORS.SERVER;


  return (
    <div css={S.auroraStyle(S.serverErrorColors)}>
      <div css={S.textStyle(S.serverErrorColors[0], S.glow(S.serverErrorColors))}>
        <h1>{status}</h1>
        <h2>{message}</h2>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default ServerErrorPage;
