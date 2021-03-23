import styled, { css } from 'styled-components';
import { button, buttonStyle } from '../../styles/basic';

export const Wrapper = styled.div`
  ${buttonStyle}
  height: 16vh;
  flex-wrap: wrap;

  & :first-child {
    width: 100%;
  }
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
  height: 100%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  display: flex;
`;

export const Image = styled.img`
  height: 75%;
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
