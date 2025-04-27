import { CustomButton } from '@/components/button';
import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import * as S from '@/errorBoundary/styles';
import { useRouteError } from 'react-router-dom';

/**
 * ApiErrorBoundary
 *
 * 라우트 컴포넌트에서 `loader` 또는 `action` 내에서 발생한 API 오류를 처리하는 컴포넌트입니다.
 *
 * - `throw new Response(...)` 또는 네트워크 요청 실패 등으로 발생한 오류를 감지합니다.
 * - 상태 코드에 따라 적절한 사용자 메시지를 안내하고, 다시 시도 버튼을 제공합니다.
 * - 404: 경로는 맞는데 API 결과가 404일 때, 예를 들어 요청한 데이터가 존재하지 않는 경우 (삭제됨, 없는 ID 등)
 * - 5xx: 서버 내부 오류 등
 * - 로그인 기능이 생길 경우 401 처리 로직이 추가될 수 있습니다.(로그인 등 확장할 경우 대비해 showRetry 변수를 만들어 두었음)
 *
 * @example
 * errorElement: <ApiErrorBoundary />
 */

const ApiErrorBoundary = () => {
  const error = useRouteError();

  console.error('🟡 API Error:', error);

  let message = UI_ERRORS.API.DEFAULT;
  const showRetry = true;

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
          style={S.retryButtonStyle}
          onClick={() => window.location.reload()} // 컨벤션에 따라 onButtonClick 등으로 바뀌면 수정 예정
        >
          다시 시도
        </CustomButton>
      )}
    </div>
  );
};

export default ApiErrorBoundary;
