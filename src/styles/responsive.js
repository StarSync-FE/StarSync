import facepaint from 'facepaint';

const breakpoints = [375, 744, 1280, 1920];
/**
 * `facepaint`를 사용하여 브레이크포인트에 맞는 미디어 쿼리를 반환하는 함수
 *
 * @param {object} styles - 스타일 객체 (예: padding, font-size 등)
 * @returns {string} - 각 브레이크포인트에 대응하는 미디어 쿼리와 함께 적용될 스타일
 *
 * @example
 * media({ padding: ['10px', '20px', '30px', '40px'] })
 * // 10px는 기본 값 375px 이상에서는 padding: 20px, 744px 이상에서는 padding: 30px, 1024px 이상에서는 padding: 40px이 적용 됩니다.
 */
const media = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default media;
