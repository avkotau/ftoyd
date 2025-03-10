import { UserCardWrapper } from './UserCardWrapper';
import { UserCardInfo } from './UserCardInfo';
import { UserCardKills } from './UserCardKills';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface UserCardProps {
  icon: ReactNode;
  username: string;
  kills: number;
}

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 24px;
`;


export const UserCard = ({ icon, username, kills }: UserCardProps) => {
  return (
    <UserCardWrapper style={{ width: '100%' }}>
      <CardContainer>
        <UserCardInfo icon={icon} username={username} />
        <UserCardKills label="Убийств" kills={kills} />
      </CardContainer>
    </UserCardWrapper>
  );
};
