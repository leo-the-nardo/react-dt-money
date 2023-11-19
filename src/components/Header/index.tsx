import logo from "../../assets/dt-money-logo.svg"
import { HeaderContainer, NewTransactionButton } from "./styles.ts"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContainer>
  )
}
