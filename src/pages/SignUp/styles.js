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

  > div,
  button {
    margin-bottom: 3.2rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
  }
`
