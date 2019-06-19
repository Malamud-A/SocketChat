import React from 'react';
import styled from 'styled-components';

export const BubbleContainer = styled.div`
  font-size: 14px;
  display: flex;
`;

export const Bubble = styled.div`
  margin: 1px 0;
  background: #f4f4f8;
  padding: 10px 15px;
  max-width: 75%;
  border-radius: 2px 20px 20px 2px;
`;

export const MessageContainer = styled(({
  start,
  end,
  mine,
  ...rest
}) => (<div {...rest} />))`
  display: flex;
  flex-direction: column;
  ${({ mine, start, end }) => (mine && `
    ${BubbleContainer} {
      justify-content: flex-end;
    }
    ${Bubble} {
      background: #007aff;
      color: white;
      border-radius: 20px 2px 2px 20px;
      ${start ? `
        margin-top: 10px;
        border-top-right-radius: 20px;
      ` : ''}
      
      ${end ? `
        border-bottom-right-radius: 20px;
        margin-bottom: 10px;
      ` : ''}
    }
  `)};
  
  ${({ start }) => (start && `
      ${Bubble} {
        border-top-left-radius: 20px;
      }
  `)};
  
  ${({ end }) => end && `
      ${Bubble} {
        border-bottom-left-radius: 20px;
      }
  `};
  
`;

export const Timestamp = styled.div`
  display: flex;
  justify-content: center;
  color: #999;
  font-weight: 600;
  font-size: 12px;
  margin: 10px 0;
  text-transform: uppercase;
`;
