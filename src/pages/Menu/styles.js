import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};

  .menuContent {
    margin: 3.6rem 2.6rem;
    height: 100%;

    > a {
      display: block;

      font-size: 2.4rem;

      padding: 1rem;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.TAGBACKGROUND};
    }

    > a:nth-child(2) {
      margin-top: 3.6rem;
    }
  }
`
