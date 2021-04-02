import styled, { css } from 'styled-components';

export const wrapper = styled.div`
  width: 100%;
  padding: 0 5vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const wrapperV = styled.div`
  width: 100%;
  padding: 0 5vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const buttonStyle = css`
  position: relative;
  padding: 2vh;
  margin: max(2vh, 1rem) max(4vw, 1rem);

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
