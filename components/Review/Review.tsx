import { ClientReview } from "../../@types"
import styles from "./Review.module.css"

const Review = ({ review }: { review: ClientReview }) => {
  return (
    <section className={styles.review}>
      <div className={styles.container}>
        <span className={styles.quote}>{review.review}</span>
        <span className={styles.reviewer}>{review.reviewer} - {review.role}, {review.company}</span>
      </div>
    </section>
  )
}

export default Review
