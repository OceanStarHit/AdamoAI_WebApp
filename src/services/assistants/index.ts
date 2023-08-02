import axios from 'axios';
import { Config } from 'constants/config';
import { AllAssistants } from 'types/assistant';

class AssistantServices {
  async listAssistants(): Promise<AllAssistants[]> {
    console.log(Config.API_BASE_URL + '/list-assistants', 'testing');
    const response = await axios.get(Config.API_BASE_URL + '/list-assistants');
    return response.data;
  }
}

export default new AssistantServices();
