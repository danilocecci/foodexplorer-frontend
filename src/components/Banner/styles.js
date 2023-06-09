import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 14.9rem;

  img,
  .merchantText {
    position: absolute;
    z-index: 1;
  }

  > img {
    top: 0;
    left: -2.5rem;
    height: 14.9rem;
  }

  .merchantText {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 20.2rem;

    font-family: ${({ theme }) => theme.FONT.POPPINS};
    text-align: left;
    bottom: 2.2rem;
    right: 0.3rem;
  }

  h3 {
    /* font-size: 1.8rem; */
    font-size: clamp(1rem, 1.8rem, 4rem);

    white-space: nowrap;
  }

  p {
    font-size: 1.2rem;
  }

  ::after {
    content: '';
    position: absolute;
    width: 98%;
    height: 12rem;
    background: linear-gradient(#091e26, #00131c);
    bottom: 0;
    right: 0;

    z-index: 0;
  }

  @media (min-width: 535px) {
    .merchantText {
      width: fit-content;
      right: auto;
      bottom: auto;
      margin-left: 26vw;
      margin-top: 5.5rem;
    }
  }

  @media (min-width: 820px) {
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      height: 20vw;
    }

    .merchantText {
      margin-left: 15rem;

      > h3 {
        font-size: 2vw;
      }
      p {
        text-align: justify;
        font-size: 1.2vw;
      }
    }

    ::after {
      height: 16vw;
    }
  }
`
