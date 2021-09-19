import { Review } from ".."
import { ClientCase, ClientReview } from "../../@types"
import Case from "./Case"
import styles from "./Cases.module.css"

interface CasesProps {
  cases: ClientCase[]
  review: ClientReview
}

// Shows 2 cases side by side
const RegularRow = ({ cases }: { cases: ClientCase[] }) => {
  return (
    <div className={styles.row}>
      <Case clientCase={cases[0]}/>
      <Case clientCase={cases[1]}/>
    </div>
  )
}

// Shows 1 case highlighted with 2 small casses in a column
// can be reversed
const HighlightedCaseRow = ({ cases, reverse = false }: { cases: ClientCase[], reverse?: boolean }) => {
  const HighlightedCase = <Case clientCase={cases[0]} className={styles.highlightedCase + (reverse ? " " + styles.reversed : "")}/>
  
  return (
    <div className={styles.row}>
      {!reverse && HighlightedCase}
      <div className={styles.smallCases}>
        <Case clientCase={cases[1]} showCover={false}/>
        <Case clientCase={cases[2]} showCover={false}/>
      </div>
      {reverse && HighlightedCase}
    </div>
  )
}

const Cases = ({ cases, review }: CasesProps) => {
  return (
    <section className={styles.cases}>
      <RegularRow cases={cases.slice(0,2)} />
      <RegularRow cases={cases.slice(2,4)} />
      <HighlightedCaseRow cases={cases.slice(4,7)} />
      <RegularRow cases={cases.slice(7,9)} />
      <HighlightedCaseRow cases={cases.slice(9,12)} reverse />
      <RegularRow cases={cases.slice(12,14)} />
      <RegularRow cases={cases.slice(14,16)} />
      <Review review={review}/>
      <RegularRow cases={cases.slice(16,18)} />
    </section>
  )
}

export default Cases
