import styled from 'styled-components';

export const ConversationListItemRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  ${({ selected }) => (selected && 'background: #eeeef1')};
  :hover {
    background: #ddddf1;
    cursor: pointer;
  }
`;

export const ConversationPhoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(${({ photo }) => photo}) no-repeat center center;
  background-size: 75%;
  margin-right: 10px;
`;

export const ConversationTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
`;

export const ConversationSnippet = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;
