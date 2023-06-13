import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:
    'header'
    'content';
  text-align: center;

  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};

  .content {
    height: 100%;
    overflow-y: auto;

    width: 100vw;
    grid-area: 'content';

    > div {
      margin-top: 1.5rem;
    }

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
        position: relative;
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

    footer {
      margin-top: 2.4rem;
      margin-inline: -2.4rem;
      padding: 2.7rem 2.9rem;
    }
  }

  @media (min-width: 820px) {
    .content {
      padding-inline: 12.3rem;

      .meals > h2 {
        font-size: 3.2rem;
      }

      > footer {
        margin-inline: -12.3rem;
        padding-inline: 12.3rem;
      }
      .mealCard {
        min-width: 30.4rem;
        min-height: 46.2rem;

        > div {
          > img:first-child {
            min-height: 17.6rem;
          }

          > p {
            font-size: 2.4rem;
          }

          > span {
            font-size: 3.2rem;
          }

          .actions {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;

            .quantity {
              margin-bottom: 0;

              span {
                font-size: 2rem;
              }
            }

            > button {
              width: 9.2rem;
            }
          }
        }
      }
    }
  }
`
