import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8rem 1.6rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.INSERTTAGBACKGROUND};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LABEL}` : 'none'};

  :focus-within {
    border: ${({ theme, isNew }) =>
      isNew ? `1px solid ${theme.COLORS.OUTLINE}` : 'none'};
  }
  border-radius: 10px;

  input {
    border: none;
    background: none;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LABEL : theme.COLORS.TITLEBTNTAG};
    font-family: ${({ theme }) => theme.FONT.ROBOTO};

    outline: none;

    cursor: ${({ isNew }) => (isNew ? 'auto' : 'auto')};
  }

  button {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.INSERTTAGBACKGROUND : theme.COLORS.TITLEBTNTAG};

    font-size: 2rem;
  }
`
