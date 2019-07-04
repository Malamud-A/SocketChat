import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import ModalPortal from '../ModalPortal';
import utils from '../../utils';
import * as S from './styled';

const SelectUsername = ({
  isOpen,
  toggleModal,
  dispatch,
}) => {
  const [username, setUsername] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    utils.setupSocket(dispatch, username);
    toggleModal();
  };

  return (
    <ModalPortal
      isOpen={isOpen}
      toggleModal={toggleModal}
      noCloseButton
    >
      <h3>To start conversation, please, let us know your name</h3>
      <S.Form onSubmit={onSubmit}>
        <S.Input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Name"
        />
        <S.Button disabled={!username} type="submit">Start messaging</S.Button>
      </S.Form>
    </ModalPortal>
  );
};

SelectUsername.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default SelectUsername;
