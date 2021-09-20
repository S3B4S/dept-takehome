import styles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <section className={styles["contact-form"]}>
      <span className={styles["contact-form-label"]}>
        Questions? <br/>
        We are here to help!
      </span>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required/>
        </div>
        <div className={styles["hidden-div"]}></div>
        <button>Send</button>
      </form>
    </section>
  )
}

export default ContactForm
