import styled from 'styled-components';
import { fadeInEffect } from '../../animations/fadeIn';
import { fadeOutEffect } from '../../animations/fadeOut';

export const Wrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const Container = styled.div`
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio}%;
`;

export const Image = styled.img`
  width: 100%;
  position: absolute;
  ${({ isVisible }) => (isVisible ? fadeInEffect : fadeOutEffect)};
`;
