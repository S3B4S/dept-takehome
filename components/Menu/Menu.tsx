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
          <li><a>Home</a></li>
          <li><a>Werk</a></li>
          <li><a>Over</a></li>
          <li><a>Diensten</a></li>
          <li><a>Partners</a></li>
          <li><a>Stories</a></li>
          <li><a>Vacatures</a></li>
        </ul>
        <div className={styles.countries}>
          <h3>Landen</h3>
          <ul>
            <li><a>Global</a></li>
            <li className={styles.selected}><a>Nederland</a></li>
            <li><a>United States</a></li>
            <li><a>Ireland</a></li>
            <li><a>United Kingdom</a></li>
            <li><a>Deutschland</a></li>
            <li><a>Schweiz</a></li>
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
