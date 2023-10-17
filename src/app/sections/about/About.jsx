import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Button, Flex, Text, TextField } from '@radix-ui/themes';
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import styles from './about.module.css'
import { useSession } from 'next-auth/react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const About = () => {
    const { status, data: session } = useSession();
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
                    {status === "authenticated" ? (
                        // <Link className='btn primary' href="/resume">Request for CV </Link>
                        <DialogBox name={session.user.name} email={session.user.email} />
                    ) : <Link className='btn primary' href="/api/auth/signin">
                        Sign in Download
                    </Link>}


                    {/* <a href={'/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf'} download className='btn primary'>Download CV <HiDownload/></a> */}
                </div>
            </div>
        </section>
    )
}


const DialogBox = ({ name, email }) => {


    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Request For Resume</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Request For Ressume</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Make changes to your profile.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Name
                        </Text>
                        <TextField.Input
                            defaultValue={name}
                            placeholder="Enter your full name"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Email
                        </Text>
                        <TextField.Input
                            defaultValue={email}
                            placeholder="Enter your email"
                        />
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close
                        onClick={async () => {
                            try {
                                const res = await axios.post('/api/resume', { resume_requested: "YES" })
                                if (res.status === "200")
                                    toast.success(res.data)

                            } catch (e) {
                                const message = e.response.data.error ? e.response.data.error : "request failed, Try again later"
                                toast.error(message)
                                console.log(e.response.data.error)
                            }
                        }}
                    >
                        <Button>Save</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>

        </Dialog.Root>
    )
}

export default About