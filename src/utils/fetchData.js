import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://fandom-k-api.vercel.app/api-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Response('Failed to fetch data', { status: 500 });
  }
};

export default fetchData;
