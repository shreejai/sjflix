import ContactCard from "../components/ContactCard";
import styles from '@/app/contact/contact.module.css';

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard/>
      </div>
    </>
  )
}

export default page