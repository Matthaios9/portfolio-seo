import Image from 'next/image'
import Link from 'next/link'

import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import styles from './about.module.css'

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
            <div className={`container ${styles.about__container}`}>
                <div className={styles.about__left}>
                    <div className={styles.about__portrait}>
                        <Image src={'/assets/museum.JPG'} alt="About Image" width="200" height='400' />
                    </div>
                </div>
                <div className={styles.about__right}>
                    <h2>About Me</h2>
                    <div className={styles.about__cards}>
                        {
                            data.map(item => (
                                <Card key={item.id} className={styles.about__card}>
                                    <span className={styles.about__card_icon}>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        I am a seasoned full-stack developer, armed with a degree in Computer Science and a relentless passion for crafting innovative digital solutions. With a heart full of curiosity and a mind wired for innovation, I am driven by the magic that happens when Java and JavaScript converge. With more than 3 years of experience, I've honed my skills to create seamless, user-centric applications that merge functionality with aesthetics. From crafting robust backend systems with Java to conjuring interactive frontends using JavaScript, I'm on a perpetual journey to innovate and elevate.
                    </p>
                    <Link className='btn primary' href="/api/auth/signin">
                        Download
                    </Link>
                    {/* <a href={'/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf'} download className='btn primary'>Download CV <HiDownload/></a> */}
                </div>
            </div>
        </section>
    )
}

export default About