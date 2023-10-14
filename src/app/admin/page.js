import React from 'react'
import styles from './adminLogin.module.css'

const AdminLogin = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <form className='form'>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <div className="buttons">
                            <button className={styles.registerButton}>Register</button>
                            <button type="submit" className={styles.loginButton}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin