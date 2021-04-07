import { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}`;

export const fadeOutEffect = css`
  animation: ${fadeOut} 0.35s ease-out;
`;
