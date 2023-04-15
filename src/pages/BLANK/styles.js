import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 0 5rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
`
