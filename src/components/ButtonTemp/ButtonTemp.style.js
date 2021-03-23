import styled, { css } from 'styled-components';
import { button } from '../../styles/basic';

export const Button = styled(button)`
  padding: 0.6rem;
  display: flex;
  white-space: pre-wrap;
  align-items: center;
  font-weight: bold;

  p {
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  ${({ isCelcius, theme }) => css`
    & :nth-child(${isCelcius ? 2 : 1}) {
      color: ${theme.colors.grey};
    }
  `}
`;
