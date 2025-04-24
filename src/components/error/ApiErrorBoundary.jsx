import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import { useRouteError } from 'react-router-dom';
import CustomButton from '../customButton';
import * as S from './errorBoundary.styles';

/**각 페이지 단위에서 발생한 API 오류 (throw new Response(...) 또는 네트워크 실패 등)를 잡아서,
 * 사용자에게 상황에 맞는 안내 메시지 + 재시도 버튼 등을 제공하는 것
 *
 **/
const ApiErrorBoundary = () => {
  const error = useRouteError();

  console.error('🟡 API Error:', error);

  let message = UI_ERRORS.API.DEFAULT;
  const showRetry = true; // 추후 로그인 등의 기능을 확장하게 되면 사용할 수 있어서 뒀습니다.

  // 라우트는 맞는데 그 안에서 필요한 데이터가 존재하지 않을 때(데이터가 삭제되었다거나 등) 즉, 경로는 맞지만 API 결과가 404일 때 보여줄 fallback
  if (error?.status === STATUS_CODES.NOT_FOUND) {
    message = UI_ERRORS.API.DATA_NOT_FOUND;
  }

  if (error?.status >= STATUS_CODES.SERVER_ERROR) {
    message = UI_ERRORS.SERVER.DEFAULT;
  }

  return (
    <div css={S.wrapper}>
      <h2>⚠️ {message}</h2>
      {showRetry && (
        <CustomButton
          variant="error"
          style={{
            color: 'var(--white-full)',
            borderRadius: '8px',
          }}
          onClick={() => window.location.reload()} // 컨벤션에 따라 onButtonClick 등으로 바뀌면 수정 예정
        >
          다시 시도
        </CustomButton>
      )}
    </div>
  );
};

export default ApiErrorBoundary;
