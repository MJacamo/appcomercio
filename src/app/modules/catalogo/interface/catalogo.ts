export interface ICatalogo {
  _id: string,
  name: string,
  description: string,
  price: number,
  category: ICategory,
  provider: IProvider[],
  measure: number,
  existence: number,
  createdAt: Date,
  updatedAt: Date,
  __v: number
}

export interface ICategory {
  abbreviation: string,
  createdAt: Date,
  name: string,
  updatedAt: Date,
  _id: string,
  __v: number
}

export interface IProvider {
  createdAt: Date,
  identification: string,
  name: string,
  updatedAt: Date,
  _id: string,
  __v: number
}
