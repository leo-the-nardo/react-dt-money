import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles.ts"
import { SearchForm } from "./components/SearchForm"
import { TransactionsContext } from "../../contexts/TransactionsContext.tsx"
import { formatCurrency, formatDate } from "../../utils/formatter.ts"
import { useContextSelector } from "use-context-selector"

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (ctx) => ctx.transactions,
  )
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" ? "- " : ""}
                    {formatCurrency(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
