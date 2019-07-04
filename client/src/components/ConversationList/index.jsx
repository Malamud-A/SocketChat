import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  DateTime,
} from 'luxon';
import {
  selectConversation,
} from '../../actionCreators';

import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../Toolbar/ToolbarButton';

import * as S from './styled';

const ConversationList = ({
  toggleModal,
  conversations,
  selectedConversation,
  dispatch,
}) => {
  const getSortedConversations = () => [...conversations].sort((a, b) => {
    if (DateTime.fromISO(a.updated_at) < DateTime.fromISO(b.updated_at)) return 1;
    if (DateTime.fromISO(a.updated_at) > DateTime.fromISO(b.updated_at)) return -1;
    return 0;
  });

  return (
    <S.ConversationListRoot>
      <Toolbar
        title="Messenger"
        // leftItems={[
        //   <ToolbarButton key="cog" icon="ion-ios-cog"/>,
        // ]}
        rightItems={[
          <ToolbarButton onClick={toggleModal} key="add" icon="ion-ios-add-circle-outline"/>,
        ]}
      />
      <ConversationSearch/>
      {
        getSortedConversations().map(conversation => (
          <ConversationListItem
            key={conversation.conversation_id}
            data={conversation}
            onClick={() => {
              dispatch(selectConversation(conversation));
            }}
            selected={selectedConversation.conversation_id === conversation.conversation_id}
          />
        ))
      }
    </S.ConversationListRoot>
  );
};

ConversationList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  conversations: PropTypes.array.isRequired,
  selectedConversation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ConversationList;
