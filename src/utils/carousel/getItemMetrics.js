import { ITEM_DIMENSIONS } from '@/constants/carousel';

export const getItemMetrics = () => {
  const isMobile = window.innerWidth < ITEM_DIMENSIONS.MOBILE_ITEM_WIDTH;
  const itemWidth = isMobile
    ? ITEM_DIMENSIONS.MOBILE_ITEM_WIDTH
    : ITEM_DIMENSIONS.DESKTOP_ITEM_WIDTH;
  const gap = ITEM_DIMENSIONS.ITEM_GAP;

  return { itemWidth, gap };
};
