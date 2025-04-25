import { CAROUSEL_CONSTANTS } from '@/constants/carousel';

const getItemMetrics = () => {
  const mobileWidth = CAROUSEL_CONSTANTS.ITEM_DIMENSIONS.MOBILE_ITEM_WIDTH;
  const desktopWdith = CAROUSEL_CONSTANTS.ITEM_DIMENSIONS.DESKTOP_ITEM_WIDTH;
  const isMobile = window.innerWidth < CAROUSEL_CONSTANTS.MOBILE_BREAKPOINT;
  const itemWidth = isMobile ? mobileWidth : desktopWdith;
  const gap = CAROUSEL_CONSTANTS.ITEM_DIMENSIONS.ITEM_GAP;

  return { itemWidth, gap };
};

export default getItemMetrics;
