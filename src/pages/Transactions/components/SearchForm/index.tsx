import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles.tsx"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/TransactionsContext.tsx"

type SearchFormInputs = {
  query: string
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
      id="search-form"
    >
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={"1.25rem"} /> Buscar
      </button>
    </SearchFormContainer>
  )
}
