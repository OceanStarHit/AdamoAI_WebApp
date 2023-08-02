import axios from 'axios';
import { Config } from 'constants/config';
import { ChatTextType, ChatVoiceType, RoomType } from 'types/chat';

class ChatServices {
  async on_speech_as_text(data: ChatVoiceType): Promise<string> {
    const response = await axios.post(
      Config.API_BASE_URL + '/ai_respond/on_speech_as_text',
      data,
    );
    return response.data;
  }

  async on_text_as_text(data: ChatTextType): Promise<string> {
    const response = await axios.post(
      Config.API_BASE_URL + '/ai_respond/on_speech_as_text',
      data,
    );
    return response.data;
  }

  async create_room(data: string): Promise<RoomType> {
    const response = await axios.post(
      Config.API_BASE_URL + '/rooms/create-room',
      data,
    );
    return response.data;
  }

  async get_room(data: string): Promise<RoomType> {
    const response = await axios.get(Config.API_BASE_URL + '/rooms/get-room', {
      params: data,
    });
    return response.data;
  }
}

export default new ChatServices();
