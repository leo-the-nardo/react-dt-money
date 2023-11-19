import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios.ts"

type Transaction = {
  id: number
  description: string
  type: "income" | "outcome"
  category: string
  price: number
  createdAt: string
}

type TransactionsContextData = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    })
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
