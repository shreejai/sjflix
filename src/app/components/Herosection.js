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
      <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>{title}</h1>
              <p>How much does Nextflix cost? Watch Nextflix on your smartphone, tablet, Smart TV, laptop or streaming device, all for one fixed monthly fee.</p>
              <Link href="/movies">
                <button className={montserrat.className}>Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image src={imageUrl} alt="Hero Image" width={500} height={500}/>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Herosection