import fetchData from './fetchData';

export const handleAction = async (request, baseEndpoint, options = {}) => {
  const formData = await request.formData();
  const method = request.method;
  const id = formData.get('id');
  const body = Object.fromEntries(formData);

  let endpoint = baseEndpoint;
  if (id) {
    endpoint = `${baseEndpoint}/${id}`;
  }
  if (options.suffixEndpoint) {
    endpoint += options.suffixEndpoint;
  }

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    return fetchData(endpoint, { method, body });
  }

  if (method === 'DELETE') {
    return fetchData(endpoint, { method });
  }

  throw new Error('처리할 수 없는 요청 방식입니다.');
};
