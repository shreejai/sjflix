import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from 'next/image';
import Nav from '@/app/components/Nav';

export const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
      <h2 style={{margin: '0'}}>
        <Link href="/" style={{color: '#e50815', fontSize: '36px', fontWeight: '600'}}>
          {/* <Image src="/next.svg" alt="Logo"  height={40} width={150} /> */}
        NEXTFlix
        </Link>
      </h2>

      </div>
      <Nav/>
    </header>
  )
}

export default Header;
