import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  padding: 1.6rem 2.4rem;

  min-height: 29.2rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.CARDBORDER};
  background-color: ${({ theme }) => theme.COLORS.CARDBACKGROUND};

  font-family: ${({ theme }) => theme.FONT.ROBOTO};

  > img {
    position: absolute;
    width: 2.4rem;
    height: 2.2rem;
    right: 1.6rem;
    top: 1.6rem;

    cursor: pointer;
  }

  > .dish {
    display: flex;
    flex-direction: column;
    text-align: center;

    margin-top: 0.8rem;

    > img {
      height: 8.8rem;
      object-fit: contain;
    }

    > img,
    p,
    > span {
      margin-bottom: 1.2rem;
    }

    p {
      font-family: ${({ theme }) => theme.FONT.POPPINS};
      font-size: 1.4rem;
    }

    .description {
      display: none;
    }

    > span {
      color: ${({ theme }) => theme.COLORS.BLUEADMINPRICE};
    }

    .actions {
      display: flex;
      flex-direction: column;
    }

    p,
    .quantity {
      color: ${({ theme }) => theme.COLORS.SECONDARYWHITE};
    }

    .quantity {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.4rem;

      margin-bottom: 1.6rem;

      > img {
        padding-block: 11px;
        align-items: center;
        cursor: pointer;
      }
    }

    .button {
      border: 1px solid red;
      width: 100%;
    }
    > img,
    p {
      cursor: pointer;
    }
  }

  @media (min-width: 820px) {
    .description {
      display: block !important;

      font-family: ${({ theme }) => theme.FONT.ROBOTO} !important;
      font-size: 1.4rem !important;
      line-height: 2.24rem !important;
      color: ${({ theme }) => theme.COLORS.MEALDESCRIPTION} !important;
    }
  }
`
