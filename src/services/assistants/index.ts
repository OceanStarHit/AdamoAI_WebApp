import axios from 'axios';
import { Config } from 'constants/config';

class AssistantServices {
  async listAssistants() {
    try {
      const response = await axios.get(
        Config.API_BASE_URL + '/list-assistants',
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AssistantServices();
