import styled, { css } from 'styled-components';
import { button } from '../../styles/basic';

export const Button = styled(button)`
  font-size: ${({ theme }) => theme.fonts.size.m};
  padding: 1rem;
`;

const line = css`
  width: 54%;
  height: 0.2rem;
  background: black;
`;

export const Section = styled.div`
  width: 3rem;
  padding: 0.5rem 0;
  display: flex;
  position: relative;

  :before,
  :after {
    position: absolute;
    content: '';
    ${line}
    transition:transform 0.25s;
  }

  :before {
    left: 0;
    transform: rotate(${({ isOpen }) => (isOpen ? '-30deg' : '30deg')});
  }

  :after {
    right: 0;
    transform: rotate(${({ isOpen }) => (isOpen ? '30deg' : '-30deg')});
  }
`;
