import * as Dialog from "@radix-ui/react-dialog"
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeOptions,
  TransactionTypeRadioButton,
} from "./styles.tsx"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
})

type newTransactionFormInputs = {
  description: string
  price: number
  category: string
  type: "income" | "outcome"
}

async function handleCreateTransaction(data: newTransactionFormInputs) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log(data)
}

export function NewTransactionModal() {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  })
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={"1.5rem"} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Título"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Valor"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field)
              return (
                <TransactionTypeOptions
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeRadioButton variant="income" value="income">
                    <ArrowCircleUp size={"1.5rem"} />
                    Entrada
                  </TransactionTypeRadioButton>
                  <TransactionTypeRadioButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={"1.5rem"} />
                    Saída
                  </TransactionTypeRadioButton>
                </TransactionTypeOptions>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
