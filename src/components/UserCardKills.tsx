import styled from 'styled-components';
import { Typography } from './Typography';

interface UserCardKillsProps {
  label?: string;
  kills: number;
}

const KillsText = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const UserCardKills = ({ label = 'Убийств', kills }: UserCardKillsProps) => {
  const symbolAdditional = label === 'Points' ? '+' : '';

  return (
    <KillsText>
      <Typography variant={'muted'}>{label}:</Typography>
      <Typography variant={'semibold'}>{symbolAdditional}{kills}</Typography>
    </KillsText>
  );
};
