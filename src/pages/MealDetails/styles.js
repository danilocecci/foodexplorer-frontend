import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    height: 100vh;
    padding: 3.6rem 5.6rem;
    overflow-y: auto;

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

    .mealDetailsContent {
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
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;

        > button {
          width: min(18.8rem);
        }
      }
    }
  }
`
