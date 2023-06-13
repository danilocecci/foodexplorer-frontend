import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 15.8rem 5rem 0;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};

  .logo {
    font-size: 3.7rem;

    margin-bottom: 7.3rem;
  }

  img {
    height: 4.3rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    text-align: center;

    > div,
    button {
      margin-bottom: 3.2rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
    }
  }

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding: 0;

    height: 100vh;

    form {
      min-width: 48rem;
      padding: 6.4rem;

      background-color: ${({ theme }) => theme.COLORS.HEADERBACKGROUND};

      border-radius: 1.6rem;

      ::before {
        content: 'Crie sua conta';
        font-family: ${({ theme }) => theme.FONT.POPPINS};
        font-size: 3.2rem;

        margin-bottom: 3.2rem;
      }
    }
  }
`
