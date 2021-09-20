import { ChangeEvent, useState } from "react"
import { Review } from ".."
import { Category, ClientCase, ClientReview, Industry } from "../../@types"
import Case from "./Case"
import styles from "./Cases.module.css"

interface CasesProps {
  cases: ClientCase[]
  review: ClientReview
  industries: Industry[]
  categories: Category[]
}

// Shows 2 cases side by side
const RegularRow = ({ cases }: { cases: ClientCase[] }) => {
  return (
    <div className={styles.row + " " + styles.regularRow}>
      {cases[0] && <Case clientCase={cases[0]}/>}
      {cases[1] && <Case clientCase={cases[1]}/>}
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

// Creates pairs out of a list
// [1,2,3,4] -> [[1,2], [3,4]]
// [1,2,3] -> [[1,2], [3]]
const pairs = (list: any[]): any[][] => {
  if (list.length < 3) return [list]
  return [list.slice(0, 2)].concat(pairs(list.slice(2)))
}

const filterToPairs = (industry: string, category: string, cases: ClientCase[]): ClientCase[][] => {
  const filtered = cases.filter(c => c.category.category.includes(category) && c.industry.industry.includes(industry))
  return pairs(filtered)
}

const Cases = ({ cases, review, categories, industries }: CasesProps) => {
  const [category, setCategory] = useState("")
  const [industry, setIndustry] = useState("")

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }

  const handleIndustryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIndustry(event.target.value)
  }

  const CategoriesDropdown = (
    <select value={category} onChange={handleCategoryChange}>
      <option key={-1} value="">all work</option>
      {categories.map(category => (
        <option key={category.meta.id} value={category.category}>
          {category.category.toLocaleLowerCase()}
        </option>
      ))}
    </select>
  )

  const IndustryDropdown = (
    <select value={industry} onChange={handleIndustryChange}>
      <option key={-1} value="">all industries</option>
      {industries.map(industry => (
        <option key={industry.meta.id} value={industry.industry}>
          {industry.industry.toLocaleLowerCase()}
        </option>
      ))}
    </select>
  )

  return (
    <section className={styles.cases}>
      <div className={styles.filter}>
        Show me {CategoriesDropdown} in {IndustryDropdown}
      </div>
      {
        // If filters have been applied
        (category || industry)
          ? filterToPairs(industry, category, cases).map((pair) => <RegularRow key={pair[0]?.meta?.id + pair[1]?.meta?.id} cases={pair} />)
          : <>
              <RegularRow cases={cases.slice(0,2)} />
              <RegularRow cases={cases.slice(2,4)} />
              <HighlightedCaseRow cases={cases.slice(4,7)} />
              <RegularRow cases={cases.slice(7,9)} />
              <HighlightedCaseRow cases={cases.slice(9,12)} reverse />
              <RegularRow cases={cases.slice(12,14)} />
              <RegularRow cases={cases.slice(14,16)} />
              <Review review={review}/>
              <RegularRow cases={cases.slice(16,18)} />
            </>
      }
    </section>
  )
}

export default Cases
