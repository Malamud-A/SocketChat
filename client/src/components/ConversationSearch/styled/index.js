import styled from 'styled-components';

export const ConversationSearchContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ConversationSearchInput = styled.input`
  background: #f4f4f8;
  padding: 8px 10px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  ::placeholder {
    text-align: center;
  }
  :focus::placeholder {
    text-align: left;
  }
`;
