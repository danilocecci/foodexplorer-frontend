import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDBTN};

  border: none;
  border-radius: 0.8rem;

  height: 4.8rem;

  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
`
