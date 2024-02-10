'use client'

import styles from '@/app/styles/common.module.css';
import Image from 'next/image';


const MovieCard = (curElem) => {
  // const {id, type, title, synopsis} = curElem.jawSummary;
  var jawSummary = curElem.jawSummary;
  var availability = jawSummary.availability ? jawSummary.availability : "Not Available";
  console.log(availability);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          {/* <Image src={curElem.jawSummary.backgroundImage.url}/> */}
        </div>
        <h5>Movie Card</h5>
        <p>Title:</p>
        <p>Id:</p>
      </div>
    </>
  )
}

export default MovieCard