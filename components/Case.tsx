import { ClientCase } from "../@types"
import Image from "next/image"
import styles from "../styles/Case.module.css"
import { HTMLAttributes } from "react"

const Case = ({ clientCase, showCover = true, className = "" }: { clientCase: ClientCase, showCover?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={styles.case + " " + className}>
      {showCover && <Image src={clientCase.cover_image} height="500px" width="500px" className={styles.caseCover}/>}
      <span className={styles.name}>{clientCase.client}</span>
      <span className={styles.title}>{clientCase.title}</span>
      <span className={styles.open}>View case</span>
    </section>
  )
}

export default Case
