import { SummaryCard, SummaryContainer } from "./styles.ts"
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react"
import { useTheme } from "styled-components"

export function Summary() {
  const theme = useTheme()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={"2rem"} color={theme["green-500"]} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={"2rem"} color={theme["red-300"]} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollar size={"2rem"} color={theme["gray-100"]} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
