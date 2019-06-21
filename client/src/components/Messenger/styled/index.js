import styled, {
  css,
} from 'styled-components';

const scrollableCss = css`
  position: relative;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const MessengerRoot = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background: #eeeef1;

  grid-template-columns: 350px auto;
  grid-template-rows: 60px auto 60px;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
`;

export const Container = styled.div`
  padding: 10px;
`;

export const Sidebar = styled.div`
  background: white;
  grid-row-start: 1;
  grid-row-end: span 3;
  ${({ scrollable }) => scrollable && scrollableCss}
`;

export const Content = styled.div`
  background: white;
  grid-row-start: 1;
  grid-row-end: span 3;
  ${({ scrollable }) => scrollable && scrollableCss}
`;

export const Footer = styled.div`
  grid-column-start: 2;
  background: white;
`;
