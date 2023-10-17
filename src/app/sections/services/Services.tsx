import Card from '../../components/Card'
import data from './data'
import styles from './services.module.css'
import cardStyles from '../../components/card.module.css'

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className={`container ${styles.services__container}`} data-aos="fade-up">
        {
          data.map(item => (  
            <Card key={item.id} className={`${styles.service} ${cardStyles.light} `}>
              <div className={`${styles.service__icon}`}>{item.icon}</div>
              <div className={`${styles?.service__details ?  styles?.service__details : 'service__details'}`}>
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services