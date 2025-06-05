export interface Order {
  id: string
  orderNumber: string
  date: string
  status: "pending" | "confirmed" | "shipping" | "delivered" | "cancelled"
  total: number
  items: {
    id: string
    name: string
    image: string
    quantity: number
    price: number
  }[]
}