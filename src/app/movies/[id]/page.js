import styles from '@/app/styles/common.module.css';
import Image from 'next/image';

const page = async ({params}) => {

  const id = params.id;

  const this_url_needs_id = process.env.URL_THAT_REQUIRES_ID;

  const custom_url = this_url_needs_id + String(id) + '&lang=en';

  console.log(custom_url);

  const url = custom_url;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST
      }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  //console.log(data);

  const bgImg = data[0]?.details?.backgroundImage?.url? data[0]?.details?.backgroundImage?.url: '/nextflix-bg-big.jpeg';

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}> NextFlix / <span> {data[0]?.details?.type} </span> </h2>
        <div className={styles.card_section}>
          <div>
            <Image alt="Movie image" width={600} height={300} src={bgImg} style={{background:'#000', objectFit:'contain'}}/>
          </div>
          <div>
            <h1>{data[0]?.details?.title}</h1>
            <p>{data[0]?.details?.synopsis}</p>
          </div>
          
        </div>
      </div>    
    </>

  )
}

export default page