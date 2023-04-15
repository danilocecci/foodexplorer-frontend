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
  }

  > .form {
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      height: 4.3rem;
    }

    input,
    button {
      margin-bottom: 3.2rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
    }

    /* background-color: ${({ theme }) => theme.COLORS.HEADERBACKGROUND};

    padding: 15rem; */
  }
`
