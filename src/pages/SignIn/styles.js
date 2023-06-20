import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 15.8rem 5rem 0;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};

  .logo {
    display: flex;
    flex-direction: row;
    font-size: 3.7rem;

    margin-bottom: 7.3rem;

    animation: slide 1s;

    @keyframes slide {
      0% {
        opacity: 0;
        transform: translateX(-50%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
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

    animation: fadeIn 1s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
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
        content: 'Faça login';
        font-family: ${({ theme }) => theme.FONT.POPPINS};
        font-size: 3.2rem;

        margin-bottom: 3.2rem;
      }
    }
  }
`
