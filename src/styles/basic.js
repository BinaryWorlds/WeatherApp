import styled, { css } from 'styled-components';

export const button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const buttonStyle = css`
  position: relative;
  padding: 2vh;
  margin: 2vh 4vw;

  display: flex;

  :before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 92vw;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.highlight};
    transform: translate(-50%, -50%);
    border-radius: 1.5rem;
  }
`;
