type ProductID = string
type ProductCategoryType = string

export interface ProductType {
  img: {
    url: string,
    hdUrl: string
  },
  _id: ProductID,
  name: string,
  cost: number,
  category: ProductCategoryType
}
