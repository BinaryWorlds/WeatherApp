import styled, { css } from 'styled-components';
import { button } from '../../styles/basic';

export const Hamburger = styled(button)`
  position: relative;
  padding: 1.9rem 0;
`;

const line = css`
  height: 0.2rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const InnerHamburger = styled.div`
  ${line};
  position: relative;
  background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.colors.black)};
  transition: background-color 0.25s ease-in;
  transform: rotate(${({ isEdit }) => (isEdit ? '45deg' : '0')})
    translate(${({ isOpen }) => (isOpen ? '15%, 15%' : '0')});
  transition: transform 0.25s ease;

  :before,
  :after {
    position: absolute;
    content: '';
    left: 0;
    ${line};
    transition: transform 0.25s ease-in-out;
  }

  :before {
    width: 70%;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-1rem')})
      rotate(${({ isOpen }) => (isOpen ? '-90deg' : '0')});
  }

  :after {
    width: ${({ isOpen }) => (isOpen ? '70%' : '85%')};
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '1rem')});
  }
`;
