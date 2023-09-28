import Card from "../../components/Card"
import Image from 'next/image'
import styles from './testimonials.module.css'

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
        <p>{testimonial.quote}</p>
        <div className={styles.testimonial__client}>
            <div className={styles.testimonial__client_avatar}>
                <Image src={testimonial.avatar} alt="Testimonial Avatar" height={200} width={300}/>
            </div>
            <div className={styles?.testimonial__client_details}>
                <h6>{testimonial.name}</h6>
                <small>{testimonial.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial