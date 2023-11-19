import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles.tsx"

export function SearchForm() {
  return (
    <SearchFormContainer id="search-form">
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass size={"1.25rem"} /> Buscar
      </button>
    </SearchFormContainer>
  )
}
