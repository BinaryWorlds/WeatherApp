import styled from 'styled-components';
import Img from '../Image/Image';
import { button, wrapper, wrapperV } from '../../styles/basic';

export const Wrapper = styled(wrapperV)`
  height: calc(98vh - 4rem);
  margin-top: calc(2vh + 4rem);

  #temp {
    align-items: baseline;

    p {
      min-width: 4rem;
    }

    p:nth-child(2) {
      font-size: ${({ theme }) => theme.fonts.size.xxl};
    }
  }
`;

export const Details = styled(wrapperV)`
  height: calc(98vh - 8rem);

  #nextSection {
    padding: 0;
  }
`;

export const Image = styled(Img)`
  width: 100%;
`;

export const Section = styled(wrapper)`
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fonts.size.s};

  #nextCell {
    width: 20%;

    p {
      text-align: center;
    }
  }
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.m};
`;

export const RangeWrapper = styled(Cell)`
  width: 100%;
`;

export const More = styled(button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4rem;
`;
