export interface AllAssistants {
  label: string;
  icon: JSX.Element;
  color: string;
}

export interface ListAllAssistantType {
  avatar: string;
  discription: string | null;
  name: string;
  persona: string;
  uuid: string;
  _id: string;
}

export interface OpenedRoomType {
  assistant_uuid: string;
  user_uuid: string;
  uuid: string;
}

export interface CombineRoomType {
  avatar: string;
  discription: string | null;
  name: string;
  persona: string;
  _id: string;
  assistant_uuid: string;
  user_uuid: string;
  uuid: string;
}
