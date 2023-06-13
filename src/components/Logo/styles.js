import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  gap: 1.1rem;

  font-family: ${({ theme }) => theme.FONT.ROBOTO};
  font-weight: 700;
`
