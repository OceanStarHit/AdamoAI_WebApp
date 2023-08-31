import axios from 'axios';
import { Config } from 'constants/config';
import { toast } from 'react-toastify';
import {
  CombineRoomType,
  ListAllAssistantType,
  OpenedRoomType,
} from 'types/assistant';
import { instance } from 'utils/interceptor';
import { ChatVoiceType, RoomType } from 'types/chat';
class ChatServices {
  async on_speech_as_text(data: ChatVoiceType): Promise<string> {
    const response = await axios.post(
      Config.API_BASE_URL + '/ai_respond/on_speech_as_text',
      data,
    );
    return response.data;
  }

  async on_text_as_text_and_speech(data: {
    msg_txt: string;
    room: {
      assistant_uuid: string;
      user_uuid: string;
      uuid: string;
    };
  }) {
    try {
      const responseMessage = await instance.post(
        '/assistant_responds/on_text_as_text_and_speech',
        data,
      );
      console.log(responseMessage?.data);
      return responseMessage?.data;
    } catch (error) {
      //@ts-ignore
      toast.error(error?.response?.data?.detail);
    }
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

  async listAssistants() {
    try {
      const allListAssistant = await instance.get('/list-assistants');
      const openedRoom = await instance.get('/list-open-rooms');

      const combinedRooms: CombineRoomType[] = openedRoom?.data
        .map((openRoom: OpenedRoomType) => {
          const matchedAssistant = allListAssistant?.data.find(
            (room: ListAllAssistantType) =>
              room.uuid === openRoom.assistant_uuid,
          );

          if (matchedAssistant) {
            return {
              ...openRoom,
              avatar: matchedAssistant.avatar,
              discription: matchedAssistant.discription,
              name: matchedAssistant.name,
              persona: matchedAssistant.persona,
              _id: matchedAssistant._id,
            };
          }

          return null; // If no match found
        })
        .filter((combinedRoom: CombineRoomType) => combinedRoom !== null);
      return combinedRooms;
    } catch (error) {
      //@ts-ignore
      toast.error(error?.response?.data?.detail);
    }
  }

  async chatHistory(uuid: string) {
    try {
      const prevChatHistory = await instance.get(`/get-open-room-${uuid}`);

      return prevChatHistory?.data?.messages;
    } catch (error) {
      //@ts-ignore
      toast.error(error?.response?.data?.detail);
    }
  }

  async getAssistantRoomHistory(assistant_uuid: string) {
    try {
      const prevChatHistory = await instance.post(
        `/get-assistant-room`,
        assistant_uuid,
      );
      return prevChatHistory?.data?.messages;
    } catch (error) {
      //@ts-ignore
      toast.error(error?.response?.data?.detail);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async convert_voice_to_text(messageBody: any) {
    try {
      const res = await instance.post(`/voice_service/stt`, messageBody);
      console.log(
        'The response data of sendAudio_receiveTranscription(): ',
        res.data,
      );

      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new ChatServices();
