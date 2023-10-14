'use client'

import Image from 'next/image'
import navData from './data'
import { IoIosColorPalette } from 'react-icons/io'
import { useModalContext } from '../../../context/modal-context'
import './navbar.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'



const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { status, data: session } = useSession();

  if (status === 'loading') return null;
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <Image src={'/assets/img_nav.png'} width="40" height="40" alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            navData.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>

        {status === 'unauthenticated' ? <Link href="/api/auth/signin">Login</Link> : (status === 'authenticated') ? <div style={{ color: '#fff' }}>{session.user.name}</div> : null}
        <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette /></button>
      </div>
    </nav>
  )
}

export default Navbar