import * as S from '@/pages/error/styles';
import { useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();
  const status = error?.status || 404;
  const message = error?.statusText || 'Page Not Found';
  const data = error?.data || '요청하신 페이지를 찾을 수 없습니다.';

  return (
    <div css={S.auroraStyle(S.notFoundColors)}>
      <div css={S.textStyle(S.notFoundColors[0], S.glow(S.notFoundColors))}>
        <h1>{status}</h1>
        <h2>{message}</h2>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
