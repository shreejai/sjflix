import MovieData from '../components/MovieData';
import styles from '@/app/styles/common.module.css';

const page = async () => {

  return (
    <>
    <section className={styles.MovieSection}>
      <div className={styles.container}>
        <h2>Series and Movies</h2>
        <MovieData/>
      </div>
    </section>
    </>
  )
}

export default page