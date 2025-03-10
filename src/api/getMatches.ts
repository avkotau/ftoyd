import axios from 'axios';
import { Match } from './types';

const axiosInstance = axios.create({
  baseURL: 'https://app.ftoyd.com/'
});

export async function getMatches(): Promise<Match[]> {
  const response = await axiosInstance.get('fronttemp-service/fronttemp');
  return response.data.data.matches;
}
