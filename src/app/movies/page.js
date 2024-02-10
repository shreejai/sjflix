import Link from 'next/link';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';

const page = async () => {

  const url = process.env.RAPID_API_URL;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = await data.titles;

  console.log(main_data);

  return (
    <>
    <section className={styles.MovieSection}>
      <div className={styles.container}>
        <h2>Series and Movies</h2>
        <MovieCard/>
        {
          main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem}/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default page