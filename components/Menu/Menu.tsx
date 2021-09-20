import styles from "./Menu.module.css"
import socials from "../../assets/socials.json"

const Menu = ({ onMenuClose }: { onMenuClose: () => void }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles["top-row"]}>
          <img src="/icons/icon-dept-white.svg" alt="logo of Dept"/>
          <button onClick={onMenuClose}>
            <img src="/icons/icon-close-menu.svg" alt="close menu icon" />
          </button>
        </div>
        <ul className={styles["menu-items"]}>
          <li>Home</li>
          <li>Werk</li>
          <li>Over</li>
          <li>Diensten</li>
          <li>Partners</li>
          <li>Stories</li>
          <li>Vacatures</li>
        </ul>
        <div className={styles.countries}>
          <h3>Landen</h3>
          <ul>
            <li>Global</li>
            <li className={styles.selected}>Nederland</li>
            <li>United States</li>
            <li>Ireland</li>
            <li>United Kingdom</li>
            <li>Deutschland</li>
            <li>Schweiz</li>
          </ul>
        </div>
        <ul className={styles.socials}>
          {Object.values(socials).map((social, i) => (
            <li key={i}>
              {/* The items won't get reordered, so using index is okay */}
              <a href={social.url}>{social.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
