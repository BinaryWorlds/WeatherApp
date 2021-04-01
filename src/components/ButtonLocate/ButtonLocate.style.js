import styled from 'styled-components';
import { button } from '../../styles/basic';
import { BasicHint } from '../../hooks/useHints';

export const Button = styled(button)`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  padding: 1rem;
`;

export const Hint = styled(BasicHint)`
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Wrapper = styled.div`
  position: relative;
`;
