import styled, { css } from 'styled-components';

export const SiteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  min-height: 100vh;
  width: 100%;
  max-width: 2560px;
  transform: translateX(-50%);
`;
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  ${({ theme: { colors } }) =>
    css`
      background: radial-gradient(circle at top left, ${colors.mainA}, ${colors.mainB});
    `}
`;
