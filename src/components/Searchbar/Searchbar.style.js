import styled from 'styled-components';
import { button, buttonStyle } from '../../styles/basic';
import { BasicHint } from '../../hooks/useHints';

export const Form = styled.form`
  margin: max(2vh, 1rem) 4vw;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;

  .searchBtn {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    align-self: center;
    width: 50vw;
    :before {
      width: 50vw;
    }
  }
`;

export const Label = styled.label`
  position: relative;

  #label {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
  }
`;

export const Input = styled.input`
  margin-bottom: 1vh;
  padding: 0 5vw;
  outline: none;
  resize: none;
  width: 100%;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.highlight};
  border-radius: 1.5rem;
  text-align: center;
  background-color: ${({ theme, err }) => (err ? theme.colors.err : theme.colors.searchbar)};
  font-size: ${({ theme }) => theme.fonts.size.s};
`;

export const Result = styled(button)`
  ${buttonStyle}
  align-items: center;
  justify-content: center;
`;

export const Hint = styled(BasicHint)`
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
