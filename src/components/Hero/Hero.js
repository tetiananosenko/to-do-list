import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <PageTitle>
      <h1 className={styles.title}>Favorite</h1>
      <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
    </PageTitle>
  );
};

export default Hero;
