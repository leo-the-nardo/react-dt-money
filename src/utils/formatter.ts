export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(date))

export const formatCurrency = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
