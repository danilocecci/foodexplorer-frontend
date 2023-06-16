import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .page {
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    padding: 3.6rem 5.6rem;

    > a,
    h2,
    p,
    span {
      color: ${({ theme }) => theme.COLORS.SECONDARYWHITE};
      font-family: ${({ theme }) => theme.FONT.POPPINS};
    }

    > a {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 2.4rem;
    }

    .mealDetailsContent,
    .mealsInfo {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        margin-block: 1.6rem;
        width: 26.4rem;
      }

      h2 {
        font-size: 2.7rem;
        margin-bottom: 2.4rem;
      }

      p {
        margin-bottom: 2.4rem;
      }

      .tagsWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2.4rem;
        justify-content: center;

        flex-wrap: wrap;

        margin-bottom: 4.8rem;
      }

      .mealDetailsButtons {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;

        > button {
          width: 18.8rem;
        }

        > img {
          padding-block: 11px;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }

  footer {
    position: relative;
    width: 100%;
    bottom: 0;
  }

  @media (min-width: 820px) {
    .content {
      padding-inline: 12.3rem;
    }

    .content > .mealDetailsContent {
      flex-direction: row;

      margin-top: 4.2rem;

      > img {
        width: 38.9rem;
        margin-right: 4.8rem;
      }

      .mealsInfo {
        display: flex;
        align-items: flex-start;

        width: 100%;

        h2 {
          font-size: 4rem;
        }

        p {
          font-size: 2.4rem;
        }

        .tagsWrapper {
          justify-content: flex-start;
        }

        .mealDetailsButtons {
          justify-content: flex-start;
          img:nth-child(3) {
            margin-right: 1.7rem;
          }
        }

        span {
          font-size: 2rem;
        }
      }
    }

    footer {
      padding-inline: 12.3rem;
    }
  }
`
