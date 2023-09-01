import React from 'react';
import { CombineRoomType } from 'types/assistant';

export const HomeContext = React.createContext<{
  assistants: CombineRoomType[];
  getAssistants: () => void;
}>({
  assistants: [],
  getAssistants: () => {},
});
