import styled, { css } from 'styled-components';

export const SiteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  min-height: 100%;
  width: 100%;
  max-width: 2560px;
  transform: translateX(-50%);
  ${({ theme: { colors } }) =>
    css`
      background: radial-gradient(circle at top left, ${colors.mainA}, ${colors.mainB});
    `}
`;
