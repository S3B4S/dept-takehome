import { ClientCase } from "../../@types"
import Image from "next/image"
import styles from "./Case.module.css"
import { HTMLAttributes } from "react"

const Case = ({ clientCase, showCover = true, className = "" }: { clientCase: ClientCase, showCover?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={styles.case + " " + className}>
      {showCover && <Image src={clientCase.cover_image} alt="" width="600px" height="600px" className={styles["case-cover"]}/>}
      <span className={styles.name}>{clientCase.client}</span>
      <span className={styles.title}>{clientCase.title}</span>
      <div className={styles["open-wrapper"] + " " + styles["desktop-only"]}>
        <a className={styles.open}>
          <img src="/icons/icon-highlight-blue.svg" alt=""/>View case
        </a>
      </div>
    </section>
  )
}

export default Case
