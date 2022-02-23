import { API_BASE_URL } from "src/config"
import { ProductType } from "src/types/product"

export const getProducts = async (): Promise<ProductType[]> => {
  const res = await fetch(`${API_BASE_URL}/products`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${process.env.TOKEN}`
    },
    method: "GET"
  })
  return await res.json()
}
