import styled from 'styled-components';

export const ToolbarRoot = styled.div`
  display: flex;
  align-items: center;

  background-color: white;
  font-weight: 500;
  border-bottom: 1px solid #eeeef1;

  position: sticky;
  top: 0px;
  @supports (backdrop-filter: blur(20px)) {
    & {
      border: none;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
    }
  }
`;

export const ToolbarTitle = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 800;
`;

export const ToolbarButtonRoot = styled.i`
  color: #007aff;
  font-size: 28px;
  transition: all 0.1s;
  :hover {
    cursor: pointer;
    color: #0063ce;
  }
  :active {
    color: #007aff;
    opacity: 0.25;
  }
`;

export const Items = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  ${ToolbarButtonRoot} {
    margin-right: 20px;
     :last-child {
      margin: 0;
     }
  }
  ${({ right }) => right && `
      flex-direction: row-reverse;
      ${ToolbarButtonRoot} {
        margin-left: 20px;
      }
  `}
`;
