import styled, { css } from 'styled-components';
import {ButtonHTMLAttributes} from "react";

export type ButtonVariant = 'primary';

interface StyledButtonProps {
    $variant?: ButtonVariant;
}

const buttonStyles = css`
    background-color: var(--destructive);
    color: var(--text-hover);

    &:active {
        background-color: var(--destructive-pressed);
    }

    &:disabled {
        background-color: var(--destructive-disabled);
        color: var(--text-disabled);
        cursor: not-allowed;
    }
`;

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 15px;
    ${buttonStyles}
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
    return (
        <StyledButton $variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};
