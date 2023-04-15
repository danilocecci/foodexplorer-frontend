import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.FOOTERBACKGROUND};
  padding: 2.9rem 2.7rem;

  .logoFooter {
    gap: 0.6rem;
    color: ${({ theme }) => theme.COLORS.FOOTERBRAND};
  }

  > p {
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.FOOTERCOPYRIGHT};
  }
`
