import * as S from '@/pages/error/styles';
import { useRouteError } from 'react-router-dom';

const ServerErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || 500;
  const message = error?.statusText || 'Internal Server Error';
  const data = error?.data || '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';

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
