import React from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';
import { MatchStatus } from '../api/types';
import { CardStatus } from './CardStatus';

interface ScoreDisplayProps {
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

const ScoreContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
    letter-spacing: 0;
    background: none;
`;

const statusMapping: Record<MatchStatus, { status: 'live' | 'finished' | 'preparing'; text: string }> = {
  [MatchStatus.Ongoing]: { status: 'live', text: 'Live' },
  [MatchStatus.Finished]: { status: 'finished', text: 'Finished' },
  [MatchStatus.Scheduled]: { status: 'preparing', text: 'Match preparing' }
};

export const ScoreDisplay = ({ homeScore, awayScore, status }: ScoreDisplayProps) => {
  const cardStatus = statusMapping[status];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <Typography variant={'regular'} fontSize={20}>
        <ScoreContainer>{homeScore} : {awayScore}</ScoreContainer>
      </Typography>
      <CardStatus status={cardStatus.status} text={cardStatus.text} />
    </div>
  );
};
