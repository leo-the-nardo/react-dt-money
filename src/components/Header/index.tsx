import logo from "../../assets/dt-money-logo.svg"
import { HeaderContainer, NewTransactionButton } from "./styles.ts"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
