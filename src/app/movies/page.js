import MovieData from '../components/MovieData';
import styles from '@/app/styles/common.module.css';

const page = async () => {

  return (
    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h2>Series and Movies</h2>
        <div className={styles.card_section}>
          <MovieData/>
        </div>
      </div>
    </section>
    </>
  )
}

export default page