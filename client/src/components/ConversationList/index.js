import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../Toolbar/ToolbarButton';

import * as S from './styled';

const ConversationList = () => {
  const [conversations, setConversations] = useState([]);

  const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then((response) => {
      const res = response.data.results.map(result => ({
        photo: result.picture.large,
        name: `${result.name.first} ${result.name.last}`,
        text: 'Hello world! This is a long message that needs to be truncated.',
      }));
      setConversations([...conversations, ...res]);
    });
  };

  useEffect(() => {
    getConversations();
  }, [])

  return (
    <S.ConversationListRoot>
      <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton key="cog" icon="ion-ios-cog"/>
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline"/>
        ]}
      />
      <ConversationSearch/>
      {
        conversations.map(conversation => (
          <ConversationListItem
            key={conversation.name}
            data={conversation}
          />
        ))
      }
    </S.ConversationListRoot>
  );
};

export default ConversationList
