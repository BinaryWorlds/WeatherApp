import styled, { css } from 'styled-components';
import { button, buttonStyle } from '../../styles/basic';
import Img from '../Image/Image';

export const Wrapper = styled.div`
  ${buttonStyle}
  height: 16vh;
  min-height: 7rem;
  flex-wrap: wrap;

  & :first-child {
    width: 100%;
  }
  cursor: pointer;
`;

export const Name = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.size.s};
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.xs};
`;

export const Image = styled(Img)`
  width: 12vh;
  min-width: 5.25rem;
  position: absolute;
  left: 50%;
  top: 62.5%;
  transform: translate(-50%, -50%);
`;

const line = css`
  height: 0.2rem;
  width: 3rem;
  background-color: ${({ theme }) => theme.colors.red};
`;

export const Delete = styled(button)`
  position: relative;
  padding: 2rem;

  :before,
  :after {
    z-index: -1;
    position: absolute;
    content: '';
    ${line};
    left: 50%;
    top: 50%;
  }

  :before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
