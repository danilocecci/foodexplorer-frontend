import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.HEADERBACKGROUND};

  height: 11.4rem;
  width: 100%;
  padding: 5.4rem 2.4rem 2.4rem;

  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
  font-family: ${({ theme }) => theme.FONT.ROBOTO};

  font-size: 2.1rem;

  :has(span) {
    justify-content: center;

    > img {
      margin-right: auto;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.BLUEADMINPRICE};
    font-size: 1.2rem;
    margin-left: 0.8rem;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.6rem;
  }

  a {
    display: flex;
    align-items: center;
  }

  .headerAdmin {
    width: 100%;
    display: flex;
    align-items: center;

    > div {
      margin-left: auto;
    }
  }

  div:has(.inputWrapper) {
    display: none;
  }

  .orderedMeals {
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 0.8rem;

    cursor: pointer;

    > p {
      font-family: ${({ theme }) => theme.FONT.POPPINS};
      font-size: 1.4rem;

      display: none;
    }

    img.imgAdmin {
      display: none;
    }
  }

  .signOut {
    display: none;
  }

  @media (min-width: 820px) {
    padding-inline: 12.3rem;

    .headerAdmin {
      > div,
      span {
        margin: 0;
      }

      width: fit-content;

      padding-right: 1.1rem;

      flex-direction: column;

      justify-content: center;

      > span {
        align-self: flex-end;

        margin-top: -8px;
      }
    }

    > a:first-child {
      display: none;
      border: 1px solid red;
    }

    div:has(.inputWrapper) {
      display: flex;
      width: 80%;
      margin-inline: 3.2rem;
    }

    .signOut {
      display: flex;
      margin-left: 3.2rem;

      cursor: pointer;
    }

    .orderedMeals > img,
    .orderedMeals > img.imgAdmin {
      display: initial;
    }
  }

  @media (min-width: 945px) {
    .orderedMeals {
      padding: 1.2rem 4.6rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUNDBTN};
      border-radius: 0.5rem;

      > p {
        display: initial;
        color: white;
      }

      > img,
      > img.imgAdmin {
        display: none;
      }
    }
  }
`
