import styled from 'styled-components';

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
`;
