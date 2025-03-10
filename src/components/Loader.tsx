import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid var(--text-disabled);
    border-top: 3px solid var(--text-primary);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

export const Loader = () => {
  return <Spinner />;
};
