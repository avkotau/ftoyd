import styled, { css } from 'styled-components';
import { Typography } from './Typography';

export type StatusType = 'live' | 'finished' | 'preparing';

interface CardStatusProps {
  status: StatusType;
  text: string;
  className?: string;
}

const statusStyles = css<{ status: StatusType }>`
    background-color: ${({ status }) =>
            status === 'live' ? 'var(--status-green)' :
                    status === 'finished' ? 'var(--status-red)' :
                            'var(--status-orange)'};
`;

const StatusContainer = styled.div<{ status: StatusType }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 2px;
    border-radius: 4px;
    width: 92px;
    height: 27px;
    ${statusStyles};
`;

export const CardStatus = ({ status, text, className }: CardStatusProps) => {
  return (
    <StatusContainer className={className} status={status}>
      <Typography variant={'regular'} fontSize={12}>{text}</Typography>
    </StatusContainer>
  );
};
