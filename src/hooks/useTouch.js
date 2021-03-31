import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nextCity, touchMenu } from '../store/actions';

const lockTime = 350;

const left = 'left';
const right = 'right';
const up = 'up';
const down = 'down';

function useTouch() {
  const dispatch = useDispatch();

  const timerId = useRef();

  const setTimerId = (id) => {
    clearTimeout(timerId.current);
    timerId.current = id;
  };

  const handleChange = (turn) => {
    if (turn === left) dispatch(touchMenu());
    if (turn === right) dispatch(nextCity());
  };

  const debounceChange = (turn) => {
    if (!timerId.current) handleChange(turn);

    const timerIdTask = setTimeout(() => setTimerId(null), lockTime);

    setTimerId(timerIdTask);
  };

  const readXy = ({
    touches: {
      0: { clientX, clientY },
    },
  }) => ({ clientX, clientY });

  const firstTouch = useRef(null);

  const handleTouchStart = (e) => {
    firstTouch.current = readXy(e);
  };

  const handleTouchMove = (e) => {
    if (!firstTouch.current) return;
    const { clientX, clientY } = readXy(e);

    const xDiff = firstTouch.current.clientX - clientX;
    const yDiff = firstTouch.current.clientY - clientY;

    const xDiffAbs = Math.abs(xDiff);
    const yDiffAbs = Math.abs(yDiff);

    const minGesture = 38; // ~1cm
    if (xDiffAbs < minGesture && yDiffAbs < minGesture) return;

    const direction = xDiffAbs > yDiffAbs; // true:left/right; false up/down

    let turn;
    if (direction && xDiff > 0) turn = right;
    else if (direction) turn = left;
    else if (yDiff < 0) turn = up;
    else if (yDiff > 0) turn = down;

    debounceChange(turn);

    firstTouch.current = null;
  };

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
}

export default useTouch;
