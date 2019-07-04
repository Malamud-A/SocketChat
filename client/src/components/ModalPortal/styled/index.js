import styled from 'styled-components';

export const ModalRoot = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.4);
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 30px 10px 10px;
  width: 65%;
  height: 400px;
  border: 1px solid #007aff;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 8px -3px #000;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background: #007aff;
  color: #fff;
  line-height: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #0063ce;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
