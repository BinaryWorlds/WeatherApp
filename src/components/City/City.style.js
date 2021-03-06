import styled from 'styled-components';
import Img from '../Image/Image';
import { wrapper, wrapperV } from '../../styles/basic';
import ButtonMore from '../ButtonMore/ButtonMore';

export const Wrapper = styled.div`
  transform: translateY(${({ isOpen }) => (isOpen ? 'calc(-100vh)' : '0')});
  transition: transform 0.5s;
  position: relative;
`;

export const Main = styled(wrapperV)`
  height: calc(82vh - 4rem);
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;

  .description {
    font-style: italic;
  }

  .temp p,
  .sun p {
    min-width: 6rem;
    text-align: center;
  }

  .temp {
    display: flex;
    align-items: baseline;

    p {
      font-size: ${({ theme }) => theme.fonts.size.s};
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    p:nth-child(2) {
      font-size: ${({ theme }) => theme.fonts.size.xxl};
      font-weight: ${({ theme }) => theme.fonts.weight.regular};
      position: relative;
      left: 1rem;
    }
  }

  ${({ theme }) => theme.mq.landscape} {
    flex-flow: column wrap;
    justify-content: space-around;
    align-content: space-around;

    & > * {
      width: 50%;
    }

    .mainIcon {
      order: -1;
    }
  }

  ${({ theme }) => theme.mq.phoneL} {
    .temp {
      padding: 0 1vw;
    }
  }
`;

export const Details = styled(wrapperV)`
  justify-content: space-evenly;
  position: absolute;
  height: calc(98vh - 4rem);
  top: 100vh;
  left: 0;

  .nextSection {
    padding: 0;
  }

  .nextCell {
    width: 20%;
    p:first-of-type {
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    p:last-of-type {
      font-weight: ${({ theme }) => theme.fonts.weight.regular};
    }
  }

  .detailsSection {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.line};
    width: calc(100% - 5vw);
    padding: 0 2.5vw;
    margin: 0 2.5vw;
  }

  .detailsLeft,
  .detailsRight {
    padding: 0.7rem 0;
    margin: 0.7rem 0;
  }

  .detailsLeft {
    align-items: flex-start;
  }

  .detailsRight {
    align-items: flex-end;
  }

  ${({ theme }) => theme.mq.landscape} {
    .nextSection {
      width: 50%;
    }

    .details {
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: space-around;
    }

    .detailsSection {
      width: calc(50% - 5vw);
    }
  }

  ${({ theme }) => theme.mq.portrait} {
    .detailsSection:last-of-type {
      border: none;
    }
  }
`;

export const ImageMain = styled(Img)`
  width: 60%;
  ${({ theme }) => theme.mq.landscape} {
    width: 40%;
    max-width: 50vh;
  }
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
  }

  p:first-of-type {
    font-style: italic;
  }

  p:last-of-type {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

export const More = styled(ButtonMore)``;
