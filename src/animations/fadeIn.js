import { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}`;

export const fadeInEffect = css`
  animation: ${fadeIn} 0.35s ease-in;
`;
