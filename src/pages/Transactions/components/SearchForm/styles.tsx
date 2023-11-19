import styled from "styled-components"

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    border: none;
    padding: 1rem;
    flex: 1;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    &&::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;
    padding: 0 2rem;
    color: ${(props) => props.theme["green-300"]};
    font-weight: 700;

    cursor: pointer;
    transition: all 0.15s;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["gray-100"]};
      border: 1px solid ${(props) => props.theme["green-500"]};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
