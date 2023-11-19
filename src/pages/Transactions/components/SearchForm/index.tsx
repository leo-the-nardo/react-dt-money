import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles.tsx"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type SearchFormInputs = {
  query: string
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

async function handleSearchTransactions(data: SearchFormInputs) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log(data)
}

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
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
