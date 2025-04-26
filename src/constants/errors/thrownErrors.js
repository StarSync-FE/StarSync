/**
 * Thrown Error Messages
 *
 * `loader`나 `action` 함수 내부에서 `throw new Response(...)`를 호출할 때,
 * `Response` 객체의 body로 전달하는 메시지 문자열을 상수로 정의한 객체입니다.
 *
 * 이 메시지는 사용자에게 직접 보여주는 것이 아니라, 라우터 에러 처리기(`useRouteError`)에서
 * 내부 디버깅 용도 또는 메시지 매핑 로직을 위해 사용할 수 있습니다.
 *
 * 사용자에게 노출되는 에러 메시지는 `UI_ERRORS`에서 별도로 관리합니다.
 *
 * @example
 * throw new Response(THROWN_ERROR.FETCH_FAILED, {
 *   status: 500,
 * });
 */
const THROWN_ERRORS = {
  FETCH_FAILED: '데이터 요청 중 에러 발생',
  DATA_NOT_FOUND: '요청한 데이터 없음',
  SERVER_ERROR: '서버 응답 오류 발생',
};

export default THROWN_ERRORS;
