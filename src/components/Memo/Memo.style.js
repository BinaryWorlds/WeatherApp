import styled from 'styled-components';
import { fadeInEffect } from '../../animations/fadeIn';
import { fadeOutEffect } from '../../animations/fadeOut';

export const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  ${({ isVisible }) => (isVisible ? fadeInEffect : fadeOutEffect)};
`;
