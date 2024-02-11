'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/styles/common.module.css';

const MovieCard = (curElem) => {
  // const {id, type, title, synopsis} = curElem.jawSummary;
  var jawSummary = curElem.jawSummary;
  var title = jawSummary?.title ? jawSummary.title : "Not Available";
  var id = jawSummary?.id ? jawSummary.id : "No Id";
  var BgImg = jawSummary?.backgroundImage?.url;
  var synopsis = jawSummary?.synopsis;
  synopsis.length > 66 ?  synopsis=synopsis.slice(0,63)+" ..." : synopsis;
  title.length > 20 ?  title = title.slice(0,18) + " ..." : title ;
  // console.log(jawSummary);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image alt='' src={BgImg} width={260} height={200}/>
        </div>
        <div className={styles.card_data}>
          <h3>{title}</h3>
          <p>{synopsis}</p>
          <Link href={`/movies/${id}`}>
            <button>Read more</button>
          </Link>
        </div>    
      </div>
    </>
  )
}

export default MovieCard