import React, { Component } from 'react';
import moment from 'moment';

import * as S from './styled';

export default class Message extends Component {
  render() {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = this.props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <S.MessageContainer
        mine={isMine}
        end={endsSequence}
        start={startsSequence}
        >
        {
          showTimestamp &&
            <S.Timestamp>
              { friendlyTimestamp }
            </S.Timestamp>
        }

        <S.BubbleContainer>
          <S.Bubble title={friendlyTimestamp}>
            { data.message }
          </S.Bubble>
        </S.BubbleContainer>
      </S.MessageContainer>
    );
  }
}
