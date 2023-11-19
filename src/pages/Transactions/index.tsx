import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles.ts"
import { SearchForm } from "./components/SearchForm"

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant={"income"}>R$ 12.000</PriceHighlight>
              </td>

              <td>Desenvolvimento</td>
              <td>01/01/2023</td>
            </tr>
            <tr>
              <td width="40%">Aluguel</td>
              <td>
                <PriceHighlight variant={"outcome"}>- R$ 4.000</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>20/12/2022</td>
            </tr>
            <tr>
              <td width="40%">Hamburguer</td>
              <td>
                <PriceHighlight variant={"outcome"}>- R$ 59,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>01/01/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
