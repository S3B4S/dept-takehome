import type { NextPage } from "next"
import Head from "next/head"
import { getCases, getCategories, getClients, getIndustries, getReviews } from "../utils/api"
import { Cases, Clients, ContactForm, Footer, Hero, Menu } from "../components"
import styles from "../styles/Home.module.css"
import { APIData, ClientCase, Client, ClientReview, Industry, Category } from "../@types"
import { useState } from "react"

// @TODO inherit from getStaticProps
interface HomeProps {
  cases: ClientCase[]
  clients: Client[]
  review: ClientReview
  industries: Industry[]
  categories: Category[]
}

const Home: NextPage<HomeProps> = ({ cases, clients, review, industries, categories }) => {
  const [menuIsShown, setMenuShown] = useState(false)

  const showMenu = () => { setMenuShown(true) }
  const closeMenu = () => { setMenuShown(false) }

  return (
    <div className={styles.main}>
      {menuIsShown && <Menu onMenuClose={closeMenu}/>}
      <Head>
        <title>Dept</title>
        <meta name="description" content="Dept agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero onMenuClick={showMenu}/>
      <Cases cases={cases} review={review} industries={industries} categories={categories}/>
      <Clients clients={clients}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home

const sortByOrderInc = (a: APIData, b: APIData): number => a.order - b.order

export async function getStaticProps() {
  const { data: { cases } } = await getCases()
  const { data: { clients }} = await getClients()
  const { data: { reviews }} = await getReviews()
  const { data: { industries }} = await getIndustries()
  const { data: { categories }} = await getCategories()
  
  return {
    props: {
      // Order based on order field, incrementing
      // and only grab the first 18 entries for cases
      // usually this should be done through the API,
      // but looks like ButterCMS does not support ordering numerically, only lexicographically.
      cases: cases.sort(sortByOrderInc).slice(0, 18),
      clients: clients.sort(sortByOrderInc),
      review: reviews[0],
      industries,
      categories,
    }
  }
}
