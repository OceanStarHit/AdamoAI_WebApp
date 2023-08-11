import ChatServices from 'services/chat';
import { SENDER_TYPE } from 'types/chat';

const getBlob = async (blobUrl: string) => {
  const response = await fetch(blobUrl!);
  const blob = await response.blob();
  const reader = new FileReader();
  let base = '';
  reader.onload = function () {
    const dataUrl = reader.result as unknown as string;
    const base64 = dataUrl.split(',')[1];
    base = base64;
  };
  reader.readAsDataURL(blob);
  return base;
};

export const fetchSpeechToText = async (mediaBlobUrl: string) => {
  const base64 = await getBlob(mediaBlobUrl);

  const sendVoice = {
    room: {
      uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      assistant_uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    },
    audio_file: base64,
  };
  try {
    const response = await ChatServices.on_speech_as_text(sendVoice);
    return response;
  } catch (error) {
    return 'Voice message Testing';
  }
};

export const getRoom = async (room_uuid: string) => {
  try {
    const response = await ChatServices.get_room(room_uuid);
    const messageResponse = response?.history.map((message) => ({
      text: message.text,
      sender:
        message.messenger_uuid === '3fa85f64-5717-4562-b3fc-2c963f66afa6'
          ? SENDER_TYPE.USER
          : SENDER_TYPE.BOT,
    }));
    return messageResponse;
  } catch (error) {
    return [];
  }
};

export const handleCreateRoom = async (createRoom: string) => {
  await ChatServices.create_room(createRoom);
};
