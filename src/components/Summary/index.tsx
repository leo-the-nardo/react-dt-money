import { SummaryCard, SummaryContainer } from "./styles.ts"
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react"
import { useTheme } from "styled-components"
import { formatCurrency } from "../../utils/formatter.ts"
import { useSummary } from "../../hooks/useSummary.ts"

export function Summary() {
  const theme = useTheme()
  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={"2rem"} color={theme["green-500"]} />
        </header>
        <strong>{formatCurrency(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={"2rem"} color={theme["red-300"]} />
        </header>
        <strong>{formatCurrency(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollar size={"2rem"} color={theme["gray-100"]} />
        </header>
        <strong>{formatCurrency(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
