import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles.tsx"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TransactionsContext } from "../../../../contexts/TransactionsContext.tsx"
import { useContextSelector } from "use-context-selector"
import { memo } from "react"

type SearchFormInputs = {
  query: string
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (ctx) => ctx.fetchTransactions,
  )

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

export const SearchForm = memo(SearchFormComponent)
