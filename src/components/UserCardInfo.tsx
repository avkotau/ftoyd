import styled from 'styled-components';
import { Typography } from './Typography';
import { ReactNode } from 'react';

interface UserCardInfoProps {
  icon: ReactNode;
  username: string;
}

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UserCardInfo = ({ icon, username }: UserCardInfoProps) => {
  return (
    <InfoContainer>
      <IconWrapper>{icon}</IconWrapper>
      <Typography variant={'regular'} color="var(--text-hover)">{username}</Typography>
    </InfoContainer>
  );
};
