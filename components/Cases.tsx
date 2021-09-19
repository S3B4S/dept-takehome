import { Case, Review } from "../@types"

interface CasesProps {
  cases: Case[]
  review: Review
}

const Cases = ({ cases, review }: CasesProps) => {
  return (
    <section>
      Cases
      { cases && cases.map((x, i) => <div key={i}>{JSON.stringify(x)}</div>)}
      {review.review}
    </section>
  )
}

export default Cases
