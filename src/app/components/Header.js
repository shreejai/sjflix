import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from 'next/image';
import Nav from '@/app/components/Nav';

export const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/" >
          <Image src="/next.svg" alt="Logo"  height={40} width={150} />
        </Link>

      </div>
      <Nav/>
    </header>
  )
}

export default Header;
