import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { ReactNode } from "react";

export type DropListVariant = 'default' | 'dark';

const StyledDropListRoot = styled(Accordion.Root)`
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

const StyledDropListItem = styled(Accordion.Item)<{ $variant: DropListVariant }>`
    background-color: var(--drop-list-default);
    color: var(--text-default);

    &:hover {
        background-color: var(--drop-list-hover);
        color: var(--text-hover);
    }

    &:active {
        background-color: var(--drop-list-pressed);
        color: var(--text-pressed);
    }

    &:disabled {
        background-color: var(--primary-disabled);
        color: var(--text-disabled);
        cursor: not-allowed;
    }
`;

const StyledHeader = styled(Accordion.Header)`
    margin: 0;
`;

const StyledTrigger = styled(Accordion.Trigger)`
    width: 100%;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: var(--text-default);

    &:hover {
        color: var(--text-hover);
    }

    &:active {
        color: var(--text-pressed);
    }

    &:disabled {
        color: var(--text-disabled);
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }
`;

const StyledContent = styled(Accordion.Content)`
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
`;

export interface DropListItemData {
    id: string;
    leftComponent?: ReactNode;
    centerComponent?: ReactNode;
    rightComponent?: ReactNode;
    content: ReactNode;
}

export interface DropListProps {
    items: DropListItemData[];
    variant?: DropListVariant;
}

export const DropList = ({ items, variant = 'default', ...props }: DropListProps) => {
    return (
        <StyledDropListRoot type="single" collapsible {...props}>
            {items.map((item) => (
                <StyledDropListItem key={item.id} value={item.id} $variant={variant}>
                    <StyledHeader>
                        <StyledTrigger>
                            {item.leftComponent}
                            {item.centerComponent}
                            {item.rightComponent}
                        </StyledTrigger>
                    </StyledHeader>
                    <StyledContent>{item.content}</StyledContent>
                </StyledDropListItem>
            ))}
        </StyledDropListRoot>
    );
};
