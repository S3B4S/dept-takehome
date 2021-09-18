interface APIData {
  meta: {
    id: number
  }
  order: number
}

export interface Client extends APIData {
  client: string
  logo: string
}

export interface Review extends APIData {
  reviewer: string
  role: string
  company: string
  review: string
}

export interface Case extends APIData {
  title: string
  cover_image: string
  client: string
}
