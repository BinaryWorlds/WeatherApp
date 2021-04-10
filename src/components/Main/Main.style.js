import styled, { css } from 'styled-components';
import { BasicHint } from '../../hooks/useHints';
import { buttonStyle } from '../../styles/basic';

export const SiteWrapper = styled.div`
  height: 100%;
  width: 100vw;
  padding-top: calc(2vh + 4rem);

  .hintOne {
    top: 20vh;
    left: 50%;
  }
  .hintTwo {
    top: 50vh;
    left: 50%;
  }
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

export const Hint = styled(BasicHint)`
  transform: translateX(-50%);
`;

export const Nothing = styled.div`
  ${buttonStyle}
  height: 8vh;
  min-height: 3.5rem;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;
