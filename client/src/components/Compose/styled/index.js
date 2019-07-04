import styled from 'styled-components';
import {
  ToolbarButtonRoot,
} from '../../Toolbar/styled';

export const ComposeRoot = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background: white;
  border-top: 1px solid #eeeef1;
  position: fixed;
  width: calc(100% - 370px);
  bottom: 0;
  @supports (backdrop-filter: blur(20px)) {
    & {
      border: none;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
    }
  }
  
  ${ToolbarButtonRoot} {
    color: #bbbbbf;
    margin-left: 15px;
    :hover {
      color: #99999c;
    }
  }
`;

export const ComposeForm = styled.form`
  width: 100%;
`;

export const ComposeInput = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  height: 40px;
  background: none;
  width: 100%;
  ::placeholder {
    opacity: 0.3;
  }
`;
