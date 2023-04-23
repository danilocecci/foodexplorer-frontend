import styled from 'styled-components'

export const Container = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.COLORS.LABEL};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    color: ${({ theme }) => theme.COLORS.LABEL};
  }

  .inputWrapper {
    :focus-within {
      outline: ${({ theme }) => theme.COLORS.OUTLINE} solid 0.2rem;
    }

    width: 100%;

    display: flex;

    padding: 1.6rem 1.4rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.INPUTBACKGROUND};
  }

  .inputWrapper,
  input {
    background-color: ${({ theme }) => theme.COLORS.INPUTBACKGROUND};
  }

  .inputWrapper > img {
    padding-right: 1.6rem;
  }

  .inputWrapper > input {
    width: 100%;
    border: none;

    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    color: ${({ theme }) => theme.COLORS.SECONDARYWHITE};

    :focus {
      outline: none;
    }
  }
`
