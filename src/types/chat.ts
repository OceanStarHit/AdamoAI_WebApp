export interface ChatVoiceType {
  room: {
    uuid: string;
    assistant_uuid: string;
  };
  audio_file: string;
}

export interface ChatTextType {
  room: {
    uuid: string;
    assistant_uuid: string;
  };
  msg_txt: string;
}

export interface RoomType {
  uuid: string;
  assistant_uuid: string;
  assistant_voice: string;
  history: [
    {
      uuid: string;
      messenger_uuid: string;
      time_stamp: string;
      text: string;
    },
  ];
}

export enum SENDER_TYPE {
  USER = 'USER',
  BOT = 'BOT',
}
