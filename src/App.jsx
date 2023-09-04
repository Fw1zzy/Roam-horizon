import styles from './styles';

import { Navbar, Hero, Exclusives, Trending, CTA, GetStarted, Footer,} from './components';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
    
      <div className='background'>
        <div className={`${styles.marginX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.marginX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>

      <div className={`${styles.marginX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Exclusives />
          <Trending />
          <CTA />
          <GetStarted />
        </div>
      </div>
      <div className={`${styles.boxWidth}`}>
      <Footer />
      </div>
    </div>
  )
}

export default App