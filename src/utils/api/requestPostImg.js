import axiosInstance from './axiosInstance';

/**
 * FormData를 이용한 이미지 업로드 전용 POST 요청
 *
 * @param {string} endpoint - 요청을 보낼 API 경로
 * @param {FormData} formData - 이미지 등 파일이 포함된 FormData 객체
 * @returns {Promise<Object>} 서버 응답 데이터
 */
const postImage = async (endpoint, formData) => {
  const response = await axiosInstance.post(endpoint, formData, {
    headers: {
      // Content-Type을 설정하지 않음: Axios가 자동으로 multipart/form-data + boundary 생성
    },
  });
  return response.data;
};

export default postImage;
