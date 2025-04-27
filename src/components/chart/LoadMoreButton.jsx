import * as S from './chart.styles';

const LoadMoreButton = ({ isLoading, hasMore, onClick }) => {
  if (!hasMore) return null;

  return (
    <button type="button" css={S.moreButton} onClick={onClick} disabled={isLoading}>
      {isLoading ? '로딩 중...' : '더 보기'}
    </button>
  );
};

export default LoadMoreButton;
