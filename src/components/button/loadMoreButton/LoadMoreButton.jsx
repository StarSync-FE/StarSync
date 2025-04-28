import * as S from './loadMoreButton.styles';

/**
 * '더 보기' 버튼 컴포넌트. 더 많은 데이터를 로드할 수 있을 때 버튼을 표시하고, 로딩 중에는 비활성화 상태로 표시합니다.
 *
 * @param {Object} props - 컴포넌트의 props 객체.
 * @param {boolean} props.isLoading - 로딩 중인 상태를 나타내는 플래그. 로딩 중이면 버튼을 비활성화하고 '로딩 중...' 텍스트를 표시합니다.
 * @param {boolean} props.hasMore - 더 많은 데이터를 로드할 수 있는지 여부를 나타내는 플래그. 더 이상 데이터가 없으면 버튼을 렌더링하지 않습니다.
 * @param {Function} props.onClick - 버튼 클릭 시 실행될 함수. 주로 더 많은 데이터를 불러오는 기능을 처리합니다.
 *
 * @returns {JSX.Element|null} 더 많은 데이터를 로드할 수 있을 경우 '더 보기' 버튼을 렌더링하고, 그렇지 않으면 null을 반환합니다.
 */
const LoadMoreButton = ({ isLoading, hasMore, onClick }) => {
  if (!hasMore) return null;

  return (
    <button type="button" css={S.moreButton} onClick={onClick} disabled={isLoading}>
      {isLoading ? '로딩 중...' : '더 보기'}
    </button>
  );
};

export default LoadMoreButton;
