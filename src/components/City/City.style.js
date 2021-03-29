import styled from 'styled-components';
import Img from '../Image/Image';
import { wrapper, wrapperV } from '../../styles/basic';

export const Wrapper = styled(wrapperV)`
  height: calc(98vh - 4rem);
  margin-top: calc(2vh + 4rem);

  #bold {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-style: normal;
  }

  #temp p,
  #sun p {
    min-width: 6rem;
    text-align: center;
  }

  #temp {
    align-items: baseline;

    p {
      font-size: ${({ theme }) => theme.fonts.size.s};
    }

    p:nth-child(2) {
      font-size: ${({ theme }) => theme.fonts.size.xxl};
      position: relative;
      left: 1rem;
    }
  }
`;

export const Details = styled(wrapperV)`
  height: calc(98vh - 8rem);
  justify-content: space-evenly;

  #bold {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  #nextSection {
    padding: 0;
  }

  #nextCell {
    width: 20%;

    p {
      text-align: center;
    }
  }

  #detailsSection {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.line};

    p:last-child {
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
      font-style: normal;
    }
  }

  #detailsSection:last-of-type {
    border: none;
  }

  #detailsLeft,
  #detailsRight {
    padding: 1rem 0;
    margin: 1rem 0;
  }

  #detailsLeft {
    align-items: flex-start;
  }

  #detailsRight {
    align-items: flex-end;
  }
`;

export const ImageMain = styled(Img)`
  width: 70%;
`;

export const Image = styled(Img)`
  width: 100%;
`;

export const Section = styled(wrapper)`
  justify-content: space-between;
`;

export const SectionV = styled(wrapperV)`
  padding: 1rem 0;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fonts.size.s};
    font-style: italic;
  }
`;

export const RangeWrapper = styled(Cell)`
  width: 100%;
`;
