import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  white-space: nowrap;

  width: min-content;
  height: 3.2rem;

  padding: 0.4rem 0.8rem;

  font-family: ${({ theme }) => theme.FONT.POPPINS};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.TAGBACKGROUND};
`
