import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 2vh 5vw;

  :before {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    transition: opacity 1s linear;
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};

    ${({ theme: { colors } }) => css`
      background: linear-gradient(45deg, ${colors.mainB} 10%, ${colors.mainC});
    `};
  }
`;
