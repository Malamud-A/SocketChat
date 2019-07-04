import styled from 'styled-components';

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 40px;
  width: 50%;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #007aff;
  border-radius: 5px;
  box-shadow: 0 0 2px -1px #000;
`;

export const Button = styled.button`
  width: 20%;
  height: 30px;
  border: none;
  background: #007aff;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  :hover {
    background: #0063ce;
    cursor: pointer;
  }
`;
