import type { NextPage } from "next"
import Head from "next/head"
import { getCases, getClients, getReviews } from "../utils/api"
import { Cases, Clients, ContactForm, Footer, Hero } from "../components"
import styles from "../styles/Home.module.css"
import { APIData, ClientCase, Client, Review } from "../@types"

interface HomeProps {
  cases: ClientCase[]
  clients: Client[]
  review: Review
}

const Home: NextPage<HomeProps> = ({ cases, clients, review }) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Dept</title>
        <meta name="description" content="Dept agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Cases cases={cases} review={review}/>
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
  
  return {
    props: {
      // Order based on order field, incrementing
      // and only grab the first 18 entries for cases
      // usually this should be done through the API,
      // but looks like ButterCMS does not support ordering numerically, only lexicographically.
      cases: cases.sort(sortByOrderInc).slice(0, 18),
      clients: clients.sort(sortByOrderInc),
      review: reviews[0],
    }
  }
}
