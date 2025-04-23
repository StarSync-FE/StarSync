import { BASE_URL } from '@/constants/api';
import axios from 'axios';

/**
 * Axios 인스턴스
 *
 * 이 인스턴스는 공통 baseURL 설정을 포함하며,
 * 모든 API 요청에 대해 일관된 설정을 적용합니다.
 *
 * - baseURL: .env 또는 constants에서 설정한 API 루트 경로
 * - 요청 헤더, 인터셉터, 에러 처리 등을 확장할 때 사용
 *
 * @example
 * import axiosInstance from '@/utils/api/axiosInstance';
 * const response = await axiosInstance.get('/example');
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
