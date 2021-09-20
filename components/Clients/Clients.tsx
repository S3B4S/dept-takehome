import { Client } from "../../@types"
import styles from "./Clients.module.css"
import Image from "next/image"

const Clients = ({ clients }: { clients: Client[] }) => {
  return (
    <section className={styles.clients}>
      <h1>Clients</h1>
      <p>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
      <div className={styles.logosWrapper}>
        {clients.map((client) => (
          <img className={styles.clientLogo} src={client.logo} key={client.meta.id}/>
        ))}
      </div>
    </section>
  )
}

export default Clients
