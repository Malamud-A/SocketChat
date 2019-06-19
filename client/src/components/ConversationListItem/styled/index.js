import styled from 'styled-components';

export const ConversationListItemRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  :hover {
    background: #eeeef1;
    cursor: pointer;
  }
`;

export const ConversationPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
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
