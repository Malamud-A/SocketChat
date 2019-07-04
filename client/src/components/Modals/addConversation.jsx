import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import ModalPortal from '../ModalPortal';
import * as S from './styled';

const addConversation = ({ isOpen, toggleModal, socket }) => {
  const [subject, setSubject] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit('create conversation', subject);
    toggleModal();
  };

  return (
    <ModalPortal
      isOpen={isOpen}
      toggleModal={toggleModal}
    >
      <h3>Please enter the conversation subject</h3>
      <S.Form onSubmit={onSubmit}>
        <S.Input
          type="text"
          value={subject}
          onChange={
            e => setSubject(e.target.value)
          }
          placeholder="conversation subject"
        />
        <S.Button type="submit">Add conversation</S.Button>
      </S.Form>
    </ModalPortal>
  );
};

addConversation.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
};

addConversation.defaultProps = {
  isOpen: false,
};

export default addConversation;
