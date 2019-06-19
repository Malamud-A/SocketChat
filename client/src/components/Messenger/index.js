import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';

import * as S from './styled';

export default class Messenger extends Component {
  render() {
    return (
      <S.MessengerRoot>
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

        <S.Sidebar>
          <ConversationList />
        </S.Sidebar>

        <S.Content>
          <MessageList />
        </S.Content>
      </S.MessengerRoot>
    );
  }
}
