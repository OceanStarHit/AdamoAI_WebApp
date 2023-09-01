import React from 'react';
import { HomeContext } from './context';
import { CombineRoomType } from 'types/assistant';
import ChatService from '../../services/chat';

type PROPS = {
  children: null | boolean | React.ReactNode | React.ReactPortal;
};

const HomeProvider: React.FC<PROPS> = ({ children }) => {
  const [assistants, setAssistants] = React.useState<CombineRoomType[]>([]);

  const getAssistants = async () => {
    const data = await ChatService.listAssistants();
    if (data) setAssistants(data);
  };

  const contextValue = {
    assistants,
    getAssistants,
  };
  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
};

export default HomeProvider;
export { HomeContext };
