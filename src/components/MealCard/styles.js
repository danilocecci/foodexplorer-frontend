import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.6rem 2.4rem;

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
  }

  > .dish {
    display: flex;
    flex-direction: column;
    text-align: center;

    margin-top: 0.8rem;

    > img {
      height: 8.8rem;
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

    > span {
      color: ${({ theme }) => theme.COLORS.BLUEADMINPRICE};
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
    }

    .button {
      border: 1px solid red;
      width: 100%;
    }
  }
`
