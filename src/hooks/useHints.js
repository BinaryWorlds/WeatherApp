import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const showingTime = 2500;

function useHint(tresholdOn = 1) {
  const [counter, setCounter] = useState(0);
  const [isHintShow, setIsHintShow] = useState(false);
  const [isOff, setIsOff] = useState(false);

  const timerId = useRef();

  const handleHint = () => {
    if (isOff || isHintShow) return;
    setCounter(counter + 1);
  };

  const hideHint = () => setIsOff(true);

  useEffect(() => {
    const showHint = !isOff && counter >= tresholdOn;
    setIsHintShow(showHint);

    if (isOff) clearTimeout(timerId.current);
    else if (showHint)
      timerId.current = setTimeout(() => {
        setIsHintShow(false);
      }, showingTime);

    return () => clearTimeout(timerId.current);
  }, [counter, isOff]);

  return { isHintShow, handleHint, hideHint };
}

export default useHint;

export const BasicHint = styled.div`
  width: 90vh;
  max-width: 90vw;
  border-radius: 1.5rem;

  z-index: 200;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.s};
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s linear 500ms, opacity 500ms linear;
  ${({ isHintShow }) =>
    isHintShow &&
    css`
      transition: visibility 0s linear, opacity 500ms linear;
      opacity: 1;
      visibility: visible;
    `}
`;
