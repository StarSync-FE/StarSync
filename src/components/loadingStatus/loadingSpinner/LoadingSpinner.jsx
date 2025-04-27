import loadingSpinnerGif from '@/assets/images/loading-spinner.gif';
import * as S from './loadingSpinner.styles';

/**
 * LoadingSpinner 컴포넌트
 *
 * 로딩 상태일 때 로딩 스피너 이미지를 표시합니다.
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isLoading - 로딩 중 여부를 나타내는 플래그
 * @returns {JSX.Element|null} 로딩 중일 경우 스피너, 그렇지 않으면 null을 반환
 */
const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div css={S.spinner}>
      <img src={loadingSpinnerGif} alt="로딩 스피너" />
    </div>
  );
};

export default LoadingSpinner;
