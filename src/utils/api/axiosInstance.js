import { UI_ERRORS } from '@/constants/errors';
import axios from 'axios';

/**
 * Axios 인스턴스
 *
 * 현재 Vite 실행 환경(`.env.development` 또는 `.env.production`)에 따라
 * BASE_URL을 자동으로 설정한 Axios 인스턴스를 반환합니다.
 *
 * 이 인스턴스를 통해 공통 설정이 적용된 API 요청을 수행할 수 있습니다.
 *
 * @see {@link https://axios-http.com/docs/instance Axios 공식 문서 - 인스턴스}
 *
 * @example
 * import axiosInstance from '@/apis/axiosInstance';
 *
 * axiosInstance.get('/users')
 *   .then(response => console.log(response.data));
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const RETRY_TIMEOUT_MS = 30_000;
const RETRY_INTERVAL_MS = 1000;

/**
 * Axios 응답 인터셉터
 *
 * 서버 요청이 실패할 경우 일정 간격으로 자동 재시도를 수행하며,
 * 최대 재시도 지속 시간(30초)을 초과하면 사용자에게 알림을 표시하고 요청을 중단합니다.
 *
 * - 최초 요청 시점 기준으로 최대 30초까지 재시도
 * - 재시도 간격: 1초
 * - 경과 시간 및 재시도 횟수는 콘솔에 로그 출력
 * - 30초 초과 시 UI_ERRORS.NETWORK.TIMEOUT 메시지 alert 출력 후 실패 처리
 *
 * @see UI_ERRORS.NETWORK.TIMEOUT
 * @see https://axios-http.com/docs/interceptors
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    // 요청 config가 없다면 재시도 불가
    if (!config) return Promise.reject(error);

    // 요청 시작 시간 초기화
    config.__startTime = config.__startTime || Date.now();

    // 재시도 횟수 카운트
    config.__retryCount = config.__retryCount || 0;
    config.__retryCount += 1;

    const elapsed = Date.now() - config.__startTime;

    // 시간 초과 시 종료
    if (elapsed > RETRY_TIMEOUT_MS) {
      console.error('🚫 재시도 시간 초과, 요청 중단');
      alert(UI_ERRORS.NETWORK.TIMEOUT);
      return Promise.reject(error);
    }

    console.warn(
      `🔁 [재시도 중] #${config.__retryCount} (${config.url}) - (경과 ${Math.floor(elapsed / 1000)}초)`,
    );

    // 재시도 전 대기 시간 (1초)
    await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL_MS));

    // 재시도
    return axiosInstance(config);
  },
);

export default axiosInstance;
