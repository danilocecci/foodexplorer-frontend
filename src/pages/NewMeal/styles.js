import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  div,
  a {
    color: ${({ theme }) => theme.COLORS.TITLEBTNTAG};
  }

  .pageMealContent {
    height: 100%;
    overflow-y: auto;
    padding-top: 1.9rem;
  }

  .newMealContent {
    padding-inline: 3.2rem;

    > a {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 1.65rem;

      margin-bottom: 2.4rem;
    }

    h3 {
      font-family: ${({ theme }) => theme.FONT.POPPINS};
      font-size: 3.2rem;
      margin-bottom: 3.6rem;
    }

    h3 ~ div {
      margin-bottom: 2.4rem;
    }

    > p {
      font-family: ${({ theme }) => theme.FONT.ROBOTO};
      color: ${({ theme }) => theme.COLORS.LABEL};

      margin-bottom: 0.8rem;
    }

    > label {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      padding: 1.6rem 1.4rem;
      margin-bottom: 2.4rem;

      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.INPUTBACKGROUND};
    }

    > div > label {
      color: ${({ theme }) => theme.COLORS.LABEL};
    }

    > label + div {
      display: none;
    }

    > button {
      width: 100%;
      margin-bottom: 5.3rem;
    }

    .tagWrapper {
      display: flex;
      flex-wrap: wrap;

      width: 100%;

      background-color: ${({ theme }) => theme.COLORS.INPUTBACKGROUND};

      padding: 0.8rem;
      /* outline: 1px solid red; */

      border-radius: 0.8rem;
    }

    select,
    textarea {
      background-color: ${({ theme }) => theme.COLORS.INPUTBACKGROUND};
      font-size: 1.6rem;

      padding: 1.4rem;
      outline: none;

      border: none;
      border-radius: 0.8rem;

      :focus {
        outline: 0.2rem solid ${({ theme }) => theme.COLORS.OUTLINE};
      }
    }

    .selectWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      select {
        width: 100%;
        border-right: 1.6rem solid transparent;
        color: ${({ theme }) => theme.COLORS.LABEL};
      }
    }

    .textareaWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      textarea {
        width: 100%;
        height: 17.2rem;

        color: ${({ theme }) => theme.COLORS.SECONDARYWHITE};

        resize: none;
      }
    }

    > button {
      background-color: ${({ theme }) => theme.COLORS.INSERTMEALBTN};
    }
  }
`
