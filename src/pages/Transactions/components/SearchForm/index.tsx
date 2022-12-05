import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer } from "./styles";
import { TransactionsContext } from "../../../../contexts/TransactionsContexts";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransitions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransitions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitted}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
