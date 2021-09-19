import { ClientCase, Client, ClientReview, Category, Industry } from "../@types"

const BASE_URL = "https://api.buttercms.com/v2/content"

const urlFromPath = (path: string) => BASE_URL + path + "?auth_token=" + process.env.BUTTERCMS_API_KEY

export async function getClients(): Promise<{ data: { clients: Client[] }}> {
  const res = await fetch(urlFromPath("/clients"))
  return res.json()
}

export async function getCases(): Promise<{ data: { cases: ClientCase[] }}> {
  const res = await fetch(urlFromPath("/cases"))
  return res.json()
}

export async function getReviews(): Promise<{ data: { reviews: ClientReview[] }}> {
  const res = await fetch(urlFromPath("/reviews"))
  return res.json()
}

export async function getCategories(): Promise<{ data: { categories: Category[] }}> {
  const res = await fetch(urlFromPath("/categories"))
  return res.json()
}

export async function getIndustries(): Promise<{ data: { industries: Industry[] }}> {
  const res = await fetch(urlFromPath("/industries"))
  return res.json()
}
