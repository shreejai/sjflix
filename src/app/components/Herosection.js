import heroStyles from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const Herosection = ({title, imageUrl}) => {
  return (
      <main className={heroStyles.main_section} 
      style={{ 
        backgroundImage: 'linear-gradient(44deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/nextflix-bg-big.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%' // Adjust height as per your requirement
      }}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content} style={{color: '#fff'}}>
              <h1 style={{color: '#fff'}}>{title}</h1>
              <p>NextFlix is built using Next.js and Netflix RapidAPI that provides details, stats and information of TV shows, movies, series, documentaries and more.</p>
              <Link href="/movies">
                <button className={montserrat.className} style={{background: "#e50815"}}>Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image style={{filter: "invert(1)"}} src={imageUrl} alt="Hero Image" width={500} height={500}/>
            </div>
          </div>
        </div>

        {/* Wavy Divider */}
        <div className={styles['custom-shape-divider-bottom-1707620219']}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className={styles['shape-fill']} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
          </svg>
        </div>
        {/* Wavy Divider */}

      </main>
  )
}

export default Herosection