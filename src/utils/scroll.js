export const lockScroll = () => {
  const { style } = document.body;
  style.top = `-${window.scrollY}px`;
  style.position = 'fixed';
};

export const unlockScroll = () => {
  const { style } = document.body;
  const scrollY = parseInt(style.top, 10) * -1;
  style.position = '';
  style.top = '';
  window.scrollTo(0, scrollY);
};
