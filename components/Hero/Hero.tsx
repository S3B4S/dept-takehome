import styles from "./Hero.module.css"
import Image from "next/image"
import { useState } from "react"

const Hero = ({ onMenuClick }: { onMenuClick: () => void }) => {  
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Image src="/icons/icon-dept.svg" alt="Dept logo" height="20px" width="60px"/>
          <a className={styles["nav-items"]} onClick={onMenuClick}>
            <span className={styles["menu-label"]}>Menu</span>
            <Image src="/icons/icon-menu.svg" alt="Menu" height="10px" width="20px" />
          </a>
        </nav>

        <span className={styles.callout}>Work</span>

        <div className={styles["CTA-wrapper"]}>
          <button className={styles.CTA}>View case</button>
        </div>
      </div>
    </header>
  )
}

export default Hero
