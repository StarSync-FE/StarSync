const ENDPOINTS = {
  GET_IDOLS: '/15-1/idols',
  ADD_IDOL: '/15-1/idols',
  UPDATE_IDOL: '/15-1/idols/{id}',
  DELETE_IDOL: '/15-1/idols/{id}',
  REGISTER_VOTE: '/15-1/votes',
  GET_DONATIONS: '/15-1/donations',
  ADD_DONATION: '/15-1/donations',
  UPDATE_DONATION: '/15-1/donations/{id}',
  DELETE_DONATION: '/15-1/donations/{id}',
  CONTRIBUTE_DONATION: (id) => `/15-1/donations/${id}/contribute`, // id 값을 불러와야 해서 변경
  GET_CHART: '/15-1/charts/{gender}',
  UPLOAD_IMAGE: '/images/upload',
};

export default ENDPOINTS;
