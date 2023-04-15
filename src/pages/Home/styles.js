import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';
  text-align: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};

  overflow-y: auto;

  .content {
    width: 100vw;
    grid-area: 'content';

    margin-top: 1.5rem;
    padding-inline: 2.4rem;

    font-family: ${({ theme }) => theme.FONT.POPPINS};

    h2 {
      font-size: 1.8rem;
      text-align: start;
      margin-block: 2.4rem;
    }

    .meals {
      margin-top: 6.2rem;

      .carousel {
        width: 100%;
        display: -webkit-inline-box;
        gap: 1.6rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;

        .mealCard {
          width: 21rem;
          scroll-snap-align: start;
        }
      }
    }
  }

  footer {
    margin-top: 2.4rem;
  }
`
