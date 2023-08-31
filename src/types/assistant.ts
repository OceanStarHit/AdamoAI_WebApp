export interface AllAssistants {
  label: string;
  icon: JSX.Element;
  color: string;
}
export type AssistantProps = {
  avatar: string;
  persona: string;
  name: string;
  description: string;
  href: string;
  gradientColor: string;
  uuid: string;
}[];
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
  gradientColor?: string;
}

export type AssistantTopBarPropType = {
  selectedRoom: CombineRoomType;
  setToInitialFunction: () => void;
};

export type optionsType = {
  label: string;
  component: JSX.Element;
  tags?: number;
};

export interface TabsType {
  options: optionsType[];
  className?: string;
  selectedClassName?: string;
  notSelectedClassName?: string;
  tabWidth?: string;
  variant: string;
  tabPanelClassName?: string;
}
export interface AssistantSearchBoxType {
  item?: CombineRoomType;
  selectedAssist: string;
  setSelectedRoomAction: (item: CombineRoomType) => void;
}
