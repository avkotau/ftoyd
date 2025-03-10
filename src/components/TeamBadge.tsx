import React, { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';

interface TeamBadgeProps {
  teamName: string;
  icon: ReactNode;
  reverse?: boolean;
  containerStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  textStyle?: CSSProperties;
}

const BadgeContainer = styled.div<{ $reverse?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TeamBadge = (
  {
    teamName,
    icon,
    reverse = false,
    containerStyle,
    iconStyle
  }: TeamBadgeProps) => {
  return (
    <BadgeContainer $reverse={reverse} style={containerStyle}>
      <IconWrapper style={iconStyle}>{icon}</IconWrapper>
      <Typography variant={'regular'}>{teamName}</Typography>
    </BadgeContainer>
  );
};
