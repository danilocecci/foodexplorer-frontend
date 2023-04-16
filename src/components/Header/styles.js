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
    gap: 1.6rem;
  }
`
