import { RenderErrorBoundary } from '@/components/error';
import BrokenComponent from './BrokenComponent';

const TestRenderError = () => {
  return (
    <RenderErrorBoundary>
      <BrokenComponent />
    </RenderErrorBoundary>
  );
};

export default TestRenderError;
