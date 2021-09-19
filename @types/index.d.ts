export interface APIData {
  meta: {
    id: number
  }
  order: number
}

export interface Client extends APIData {
  client: string
  logo: string
}

export interface ClientReview extends APIData {
  reviewer: string
  role: string
  company: string
  review: string
}

export interface ClientCase extends APIData {
  title: string
  cover_image: string
  client: string
  category: Category
  industry: Industry
}

export interface Category extends APIData {
  category: string
}

export interface Industry extends APIData {
  industry: string
}
