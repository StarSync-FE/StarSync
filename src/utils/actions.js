import fetchData from './fetchData';

export const handleAction = async (request, baseEndpoint) => {
  const formData = await request.formData();
  const method = request.method;
  const id = formData.get('id');
  const endpoint = id ? `${baseEndpoint}/${id}` : baseEndpoint;
  const body = Object.fromEntries(formData);

  if (method === 'POST' || method === 'PUT') {
    return fetchData(endpoint, { method, body });
  }

  if (method === 'DELETE') {
    return fetchData(endpoint, { method });
  }

  throw new Error('Unsupported method');
};
