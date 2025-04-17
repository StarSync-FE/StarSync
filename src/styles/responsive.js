import facepaint from 'facepaint';

const breakpoints = [375, 744, 1024, 1280];
const media = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default media;
