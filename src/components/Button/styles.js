import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDBTN};

  border: none;
  border-radius: 0.8rem;

  height: 4.8rem;

  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
`
