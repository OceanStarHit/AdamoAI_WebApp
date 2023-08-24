import ChatServices from 'services/chat';
import { SENDER_TYPE } from 'types/chat';

export const fetchSpeechToText = async (mediaBlobUrl: string) => {
  const audioBlob = await fetch(mediaBlobUrl).then((response) =>
    response.blob(),
  );
  const formData = new FormData();
  formData.append('audio_file', audioBlob, 'myFile.wav');

  try {
    const response = await ChatServices.convert_voice_to_text(formData);
    console.log({ response });
    return response?.transcription;
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
