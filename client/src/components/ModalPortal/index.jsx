import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ModalPortal = ({
  children,
  isOpen,
  toggleModal,
  noCloseButton,
}) => (
  <S.ModalRoot isOpen={isOpen}>
    <S.ModalWindow>
      {!noCloseButton && (
        <S.CloseButton
          onClick={toggleModal}
        >
          X
        </S.CloseButton>
      )}
      <S.ModalBody>
        {children}
      </S.ModalBody>
    </S.ModalWindow>
  </S.ModalRoot>
);

ModalPortal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  noCloseButton: PropTypes.bool,
};

ModalPortal.defaultProps = {
  isOpen: false,
  noCloseButton: false,
};

export default ModalPortal;
