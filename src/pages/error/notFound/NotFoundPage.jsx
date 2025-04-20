import * as S from './notFoundPage.styles';

const NotFoundPage = () => {
  return (
    <div css={S.auroraStyle}>
      <div css={S.textStyle}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
