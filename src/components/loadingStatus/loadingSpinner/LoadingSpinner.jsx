import loadingSpinner from '@/assets/images/loading-spinner.gif';
import * as S from './loadingSpinner.styles';

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div css={S.spinner}>
      <img src={loadingSpinner} alt="로딩 스피너" />
    </div>
  );
};

export default LoadingSpinner;
