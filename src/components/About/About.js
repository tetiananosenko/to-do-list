import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return (
    <PageTitle>
      <h1 className={styles.title}>About</h1>
      <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
    </PageTitle>
  );
};

export default About;