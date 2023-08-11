import axios from 'axios';
import { Config } from 'constants/config';
import { instance } from 'utils/interceptor';
import { IAuthType, IRegisterType } from 'types/auth';

class AuthService {
  async register(user: IRegisterType) {
    try {
      const response = await instance.post('/register/by-email', user);
      return response;
    } catch (error) {
      return error;
    }
  }

  async login(user: IAuthType) {
    const formData = new FormData();
    formData.append('username', user.email);
    formData.append('password', user.password);
    const response = await axios.post(
      Config.API_BASE_URL + '/login/access-token',
      formData,
    );
    return response;
  }

  async refreshToken() {
    const response = await axios.get(
      Config.API_BASE_URL + '/login/refresh-token',
      {
        withCredentials: true,
      },
    );
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response;
  }

  logout() {
    localStorage.removeItem('token');
  }

  getGoogleLoginUrl() {
    const response = Config.API_BASE_URL + '/login/google';
    return response;
  }

  getFacebookLoginUrl() {
    const response = Config.API_BASE_URL + '/login/facebook';
    return response;
  }
}

export default new AuthService();
