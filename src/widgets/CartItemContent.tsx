import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CartItemContentProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
`;

const Row = styled.div`
    width: 100%;
`;

export const CartItemContent = ({ leftContent, rightContent }: CartItemContentProps) => {
  return (
    <CartItemContainer>
      <Row>{leftContent}</Row>
      <Row>{rightContent}</Row>
    </CartItemContainer>
  );
};
