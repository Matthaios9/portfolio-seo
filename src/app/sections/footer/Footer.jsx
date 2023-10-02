import {links, socials} from './data'
import styles from './footer.module.css'

/**
 * Renders a footer section for a website.
 *
 * @returns {JSX.Element} The rendered footer section.
 */

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <ul className={`${styles.nav__menu}`}>
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
        <div className={styles.footer__socials}>
          {
            socials.map(social => <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
          }
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <small>2022 Mattheos Tasios &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer