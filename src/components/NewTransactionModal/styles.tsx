import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 3rem 3rem 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    input {
      border: none;
      padding: 1rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &&::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;

      border: none;

      background-color: ${(props) => props.theme["green-500"]};
      border-radius: 6px;
      padding: 1rem;
      color: ${(props) => props.theme["white"]};
      font-weight: 700;

      cursor: pointer;
      transition: all 0.15s;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  color: ${(props) => props.theme["gray-300"]};
  cursor: pointer;
  transition: all 0.15s;

  background-color: transparent;
  border: none;
  line-height: 0;

  &:hover {
    transform: scale(1.1);
  }
`

export const TransactionTypeOptions = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`

type TransactionTypeButtonOptions = {
  variant: "income" | "outcome"
}

export const TransactionTypeRadioButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonOptions>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme["gray-700"]};
  padding: 1rem;
  border-radius: 6px;

  color: ${(props) => props.theme["gray-300"]};
  border: none;
  cursor: pointer;

  transition: all 0.15s;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme["white"]};
    }
  }
`
