import { Component } from 'react';
import { CustomButton } from '@/components/button';
import { UI_ERRORS } from '@/constants/errors';
import * as S from '@/errorBoundary/styles';

/**
 * RenderErrorBoundary
 *
 * React 컴포넌트 렌더링 도중 발생하는 JavaScript 예외를 잡아주는 클래스 기반 에러 바운더리입니다.
 * 라우터 오류와는 달리, 컴포넌트 내부의 렌더링 문제(예: undefined 접근 등)를 처리합니다.
 * 라우터 errorElement가 아닌, JSX 트리 내부에서 컴포넌트 단위로 감싸서 사용하는 용도
 *
 * RenderErrorBoundary의 역할
 * - JSX 렌더링 중 발생하는 오류를 잡는다 (예: undefined.prop 등)
 * - 네트워크 요청이나 라우터 관련 에러는 처리하지 않는다
 * - 주로 try/catch로 잡을 수 없는 렌더링 중 예외를 처리함
 * - class 컴포넌트 또는 React 18+에서의 라이브러리 기반 처리 필요
 * React 공식 문서 기준, 렌더링 중 에러를 잡는 Error Boundary는 class 컴포넌트로 구현해야 한다.
 *
 * @example
 * <RenderErrorBoundary>
 *   <ProblematicComponent />
 * </RenderErrorBoundary>
 *
 *
 */
class RenderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // ❗ 여기서는 상태만 유도 (side-effect ❌)
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // ✅ 여기는 side-effect 가능 (로깅, 전송 등)
  componentDidCatch(error, info) {
    console.error('🟥 렌더링 중 에러 발생:', error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div css={S.wrapper}>
          <h2>⚠️ {UI_ERRORS.UNKNOWN}</h2>
          <CustomButton
            variant="error"
            style={S.retryButtonStyle}
            onButtonClick={() => window.location.reload()} // 컨벤션에 따라 onButtonClick 등으로 바뀌면 수정 예정
          >
            다시 시도
          </CustomButton>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RenderErrorBoundary;
