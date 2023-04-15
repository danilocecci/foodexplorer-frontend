import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.HEADERBACKGROUND};

  height: 11.4rem;
  width: 100%;
  padding: 5.4rem 2.4rem 2.4rem;

  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
`
