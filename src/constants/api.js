export const BASE_URL = 'https://fandom-k-api.vercel.app';

export const ENDPOINTS = {
  GET_IDOLS: '/15-1/idols',
  ADD_IDOL: '/15-1/idols',
  UPDATE_IDOL: '/15-1/idols/{id}',
  DELETE_IDOL: '/15-1/idols/{id}',
  REGISTER_VOTE: '/15-1/votes',
  GET_DONATIONS: '/15-1/donations',
  ADD_DONATION: '/15-1/donations',
  UPDATE_DONATION: '/15-1/donations/{id}',
  DELETE_DONATION: '/15-1/donations/{id}',
  CONTRIBUTE_DONATION: '/15-1/donations/{id}/contribute',
  GET_CHART: '/15-1/charts/{gender}',
  UPLOAD_IMAGE: '/images/upload',
};
