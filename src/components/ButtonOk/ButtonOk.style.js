import styled from 'styled-components';
import { button } from '../../styles/basic';

export const Button = styled(button)`
  margin: 0;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  font-size: ${({ theme }) => theme.fonts.size.m};
`;
