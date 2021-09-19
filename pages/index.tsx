import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { getCases } from "../utils/api"
import { Cases } from "../components/Cases"
import styles from "../styles/Home.module.css"
import { Case } from "../@types"

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Dept</title>
        <meta name="description" content="Dept agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Cases:
      <Cases cases={(props as any).cases} />
    </div>
  )
}

export default Home

const sortByOrderInc = (a: Case, b: Case): number => a.order - b.order

export async function getStaticProps() {
  const { data } = await getCases()
  
  return {
    props: {
      // Order based on order field, incrementing
      cases: data.cases.sort(sortByOrderInc),
    }
  }
}
