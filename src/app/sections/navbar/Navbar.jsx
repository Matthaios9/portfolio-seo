"use client";

import Image from "next/image";
import navData from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../../context/modal-context";
import styles from "./Navbar.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const { status, data: session } = useSession();
  const router = useRouter()
  // console.log(session)
  if (status === "loading") return null;
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.nav__container}`}>
        <a href="/" className={styles.nav__logo}>
          <Image
            src={"/assets/img_nav.png"}
            width="40"
            height="40"
            alt="Logo"
          />
        </a>
        <ul className={styles.nav__menu}>
          {navData.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        {status === "unauthenticated" ? (
          <Link style={{ color: "#fff" }} href="/api/auth/signin">
            Login
          </Link>
        ) : status === "authenticated" ? (
          <div style={{ color: "#fff" }}>
            <div className="dropdown">
              <span style={{
                fontWeight: 'bold',

              }} >{session.user.name}</span>
              <div className="dropdown-content">
                <span style={{
                  fontWeight: 'bold',

                }}>{session.user.email}</span>
                {session.user.role !== null && session.user.role === "admin" ? (
                  <span style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                    onClick={() => {
                      router.push('/admin');
                      router.refresh();
                    }}
                  >Dashboard</span>
                ) : null}
                <Link href="/api/auth/signout">Logout</Link>
              </div>
            </div>
          </div>
        ) : null}
        <button id={styles['theme__icon']} onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
