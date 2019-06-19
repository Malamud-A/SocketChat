import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';

import * as S from './styled';

const Messenger = () => (
  <S.MessengerRoot>
    <S.Sidebar>
      <ConversationList />
    </S.Sidebar>

    <S.Content>
      <MessageList />
    </S.Content>
  </S.MessengerRoot>
);

export default Messenger;
