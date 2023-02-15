import Image from 'next/image';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image 
          src="/images/site/jim-moriarty.png" 
          alt="An image showing Jim" 
          width={300} 
          height={300}
        />
      </div>
      <h1>Hi, I'm Jim!</h1>
      <p>I blog about web development with help of JS-Frameworks</p>
    </section>
  );
}

export default Hero;
 