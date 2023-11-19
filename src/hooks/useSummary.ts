import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext.tsx"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.price, 0)
  const outcome = transactions
    .filter((transaction) => transaction.type === "outcome")
    .reduce((acc, transaction) => acc + transaction.price, 0)
  const total = income - outcome

  return {
    income,
    outcome,
    total,
  }
}
