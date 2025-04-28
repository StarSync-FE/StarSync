import { THROWN_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';

/**
 * 주어진 데이터가 빈 배열인 경우 404 에러를 발생시킵니다.
 *
 * - 요청은 성공했지만 데이터가 없는 경우에 사용합니다.
 * - 빈 배열([])이면 Response를 throw하여 404 Not Found를 발생시킵니다.
 *
 * @param {any} data - 검사할 데이터
 * @throws {Response} 데이터가 빈 배열일 경우 404 상태 코드를 가진 Response를 던집니다.
 */
function throwIfEmptyArray(data) {
  if (Array.isArray(data) && data.length === 0) {
    throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
      status: STATUS_CODES.NOT_FOUND,
    });
  }
}

export default throwIfEmptyArray;
