import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <img src="/icons/icon-dept-white.svg" alt="Dept logo" className={styles.logo}/>
        <ul className={styles.links}>
          <li>Work</li>
          <li>Service</li>
          <li>Stories</li>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className={styles.social}>
          <li><a href="https://www.facebook.com/DeptAgency/"><img src="/icons/icon-fb-white.svg" alt="Facebook"/></a></li>
          <li><a href="https://twitter.com/deptagency"><img src="/icons/icon-twitter-white.svg" alt="Twitter"/></a></li>
          <li><a href="https://www.instagram.com/deptagency"><img src="/icons/icon-instagram-white.svg" alt="Instagram"/></a></li>
        </ul>
        <div className={styles["footer-border"]}></div>
        <ul className={styles.legality}>
          <li><a href="">Chamber of Commerce: 63464101</a></li>
          <li><a href="">VAT: NL 8552.47.502.B01</a></li>
          <li><a href="">Terms and conditions</a></li>
        </ul>
        <span className={styles.copyright}>&copy; 2018 Dept Agency</span>
      </div>
      <div className={styles["scroll-top"]}>
        <a href="#">
          <img src="/icons/icon-scroll-to-top-blue.svg" alt="scroll to top" />
          TOP
        </a>
      </div>
    </footer>
  )
}

export default Footer
