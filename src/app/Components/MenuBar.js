// components/MenuBar.js
import Link from 'next/link';
import styles from './MenuBar.module.css';


const MenuBar = () => {

  return (
   
    
<div className={styles.header}>
      <div className={styles.logo}>
        {/* Your logo component or image goes here */}
        <img src="/your-logo.png" alt="Logo" />
      </div>
    <nav className={styles.navBar}>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About Us
      </Link>
      <Link href="/contact">
        Work
      </Link>
      <Link href="/services">
        Services
      </Link>
      <Link href="/clients">
        Clients
      </Link>
      <Link href="/team">
        Team
      </Link>
      <Link href="/contactus">
        Contact Us
      </Link>
    </nav> </div>
  );
};

export default MenuBar;
