import styles from '@/app/contact/contact.module.css';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { MdMarkChatRead } from "react-icons/md";
import { MdForum } from "react-icons/md";



const ContactCard = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.grid_card}>
              <i><MdEmail /></i>
              <h2>Email</h2>
              <p> Monday to Friday</p>
              <p className={styles.last_para}>response time: 72 Hours</p>
              <Link href="/">
                Send Email <span>-&gt;</span>
              </Link>
            </div>
            <div className={styles.grid_card}>
              <i><MdMarkChatRead /></i>
              <h2>Live Chat</h2>
              <p>Weekdays: 9 AM to 6 PM ET</p>
              <p className={styles.last_para}>Weekends: 9 AM to 5 PM ET</p>
              <Link href="/">
                Chat Now <span>-&gt;</span>
              </Link>
            </div>
            <div className={styles.grid_card}>
              <i><MdForum /></i>
              <h2>Community Forum</h2>
              <p> Monday to Friday</p>
              <p className={styles.last_para}>response time: 72 Hours</p>
              <Link href="/">
                Ask The Community <span>-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard