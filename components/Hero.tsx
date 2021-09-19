import styles from "../styles/Hero.module.css"

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div>
          <nav className={styles.nav}>
            <img className={styles.logo} src="/icons/icon-dept.svg" alt="Dept logo" />
            <div className={styles.navItems}>
              <span className={styles.menuLabel}>Menu</span>
              <img src="/icons/icon-menu.svg" alt="Menu" />
            </div>
          </nav>
          <span className={styles.callout}>Work</span>
        </div>
        <div className={styles.CTAWrapper}>
          <button className={styles.heroCTA}>View case</button>
        </div>
      </div>
    </header>
  )
}

export default Hero
