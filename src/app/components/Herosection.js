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
              <p>How much does Nextflix cost? Watch Nextflix on your smartphone, tablet, Smart TV, laptop or streaming device, all for one fixed monthly fee.</p>
              <Link href="/movies">
                <button className={montserrat.className} style={{background: "#e50815"}}>Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image style={{filter: "invert(1)"}} src={imageUrl} alt="Hero Image" width={500} height={500}/>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Herosection