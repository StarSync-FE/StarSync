import axios from 'axios';
import { BASE_URL } from '../constants/api';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Response('Failed to fetch data', { status: 500 });
  }
};

export default fetchData;
