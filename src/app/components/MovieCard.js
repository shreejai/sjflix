'use client'

import styles from '@/app/styles/common.module.css';
import Image from 'next/image';


const MovieCard = (curElem) => {
  // const {id, type, title, synopsis} = curElem.jawSummary;
  var jawSummary = curElem.jawSummary;
  var title = jawSummary?.title ? jawSummary.title : "Not Available";
  var id = jawSummary?.id ? jawSummary.id : "No Id";
  var BgImg = jawSummary?.backgroundImage?.url;
  var synopsis = jawSummary?.synopsis;
  // console.log(jawSummary);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={BgImg} width={250} height={200}/>
        </div>
        <div className={styles.card_data}>
          <h3>Title: {title}</h3>
          <p>{synopsis}</p>
          <p>Id:{id}</p>
        </div>    
      </div>
    </>
  )
}

export default MovieCard