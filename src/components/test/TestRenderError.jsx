import { RenderErrorBoundary } from '@/errorBoundary';
import BrokenComponent from './BrokenComponent';

const TestRenderError = () => {
  return (
    <RenderErrorBoundary>
      <BrokenComponent />
    </RenderErrorBoundary>
  );
};

export default TestRenderError;
