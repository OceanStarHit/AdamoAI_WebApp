import Axios from 'axios';
import { Config } from 'constants/config';

export const API = Axios.create({
  baseURL: Config.API_BASE_URL,
});
