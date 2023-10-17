import contacts from './data'
import  styles from './contact.module.css'

const Contact = () => {
  return (
    <section id={styles.contact}>
      <h2>Get In Touch</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className={`container ${styles.contact__container}`} data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact