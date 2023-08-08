import axios from 'axios';
import { Config } from 'constants/config';

class Interceptor {
  getAccessToken() {
    // Retrieve the access token from local storage
    const accessToken = JSON.parse(localStorage.getItem('@token') ?? '{}');
    return accessToken || ''; // Return an empty string if not found
  }

  request = axios.create({
    baseURL: Config.API_BASE_URL,
    timeout: 8000,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${this.getAccessToken()}`,
    },
  });
}

export default new Interceptor();
