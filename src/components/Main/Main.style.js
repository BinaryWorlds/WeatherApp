import styled, { css } from 'styled-components';

export const SiteWrapper = styled.div`
  height: 100%;
  width: 100vw;
  padding-top: calc(2vh + 4rem);
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  ${({ theme: { colors } }) =>
    css`
      background: radial-gradient(circle at top left, ${colors.mainB}, ${colors.mainC});
    `}
`;
