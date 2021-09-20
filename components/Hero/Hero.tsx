import styles from "./Hero.module.css"
import Image from "next/image"

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div>
          <nav className={styles.nav}>
            <Image src="/icons/icon-dept.svg" alt="Dept logo" height="20px" width="60px"/>
            <div className={styles["nav-items"]}>
              <span className={styles["menu-label"]}>Menu</span>
              <Image src="/icons/icon-menu.svg" alt="Menu" height="10px" width="20px" />
            </div>
          </nav>
          <span className={styles.callout}>Work</span>
        </div>
        <div className={styles["CTA-wrapper"]}>
          <button className={styles.CTA}>View case</button>
        </div>
      </div>
    </header>
  )
}

export default Hero
