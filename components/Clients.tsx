import { Client } from "../@types"

const Clients = ({ clients }: { clients: Client[] }) => {
  return (
    <section>
      Clients
      {clients.map((x, i) => <div key={i}>{JSON.stringify(x)}</div>)}
    </section>
  )
}

export default Clients
