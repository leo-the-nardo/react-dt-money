import * as Dialog from "@radix-ui/react-dialog"
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeOptions,
  TransactionTypeRadioButton,
} from "./styles.tsx"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={"1.5rem"} />
        </CloseButton>
        <form>
          <input type="text" placeholder="Título" required />
          <input type="number" placeholder="Valor" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionTypeOptions>
            <TransactionTypeRadioButton variant="income" value="income">
              <ArrowCircleUp size={"1.5rem"} />
              Entrada
            </TransactionTypeRadioButton>
            <TransactionTypeRadioButton variant="outcome" value="outcome">
              <ArrowCircleDown size={"1.5rem"} />
              Saída
            </TransactionTypeRadioButton>
          </TransactionTypeOptions>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
