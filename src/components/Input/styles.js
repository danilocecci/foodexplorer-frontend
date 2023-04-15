import styled from 'styled-components'

export const Container = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.COLORS.LABEL};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.INPUTBACKGROUND};

    border: none;
    border-radius: 0.8rem;

    padding: 1.2rem;

    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    color: ${({ theme }) => theme.COLORS.SECONDARYWHITE};

    :focus {
      outline: ${({ theme }) => theme.COLORS.OUTLINE} solid 0.2rem;
    }
  }
`
