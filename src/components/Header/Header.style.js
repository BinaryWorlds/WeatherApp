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
  padding-bottom: 1vh;

  ${({ theme: { colors }, isOpen }) =>
    !isOpen &&
    css`
      background: linear-gradient(45deg, ${colors.mainB} 10%, ${colors.mainC});
    `}
`;
