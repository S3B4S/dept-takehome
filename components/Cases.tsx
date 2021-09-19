import { Case } from "../@types"

interface CasesProps {
  cases?: Case[]
}

export const Cases = ({ cases }: CasesProps) => {
  return (
    <>
      { cases && cases.map((x, i) => <div key={i}>{JSON.stringify(x)}</div>)}
    </>
  )
}
