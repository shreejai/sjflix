import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';

const MovieData = async () => {

  // Testing loader
  // await new Promise(resolve=>setTimeout(resolve, 2000));

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

  return main_data?.map((curElem) =><MovieCard key={curElem.id} {...curElem}/>)
}

export default MovieData