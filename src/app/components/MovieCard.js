'use client'

import styles from '@/app/styles/common.module.css';
import Image from 'next/image';


const MovieCard = (curElem) => {
  // const {id, type, title, synopsis} = curElem.jawSummary;
  var jawSummary = curElem.jawSummary;
  var title = jawSummary?.title ? jawSummary.title : "Not Available";
  var id = jawSummary?.id ? jawSummary.id : "No Id";
  var BgImg = jawSummary?.backgroundImage?.url;
  console.log(jawSummary);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          {/* <Image src={curElem.jawSummary?.backgroundImage?.url } width={150} height={100}/> */}
        </div>
        <h5>Movie Card</h5>
        <p>{BgImg}</p>
        <p>Title:{title}</p>
        <p>Id:{id}</p>
      </div>
    </>
  )
}

export default MovieCard