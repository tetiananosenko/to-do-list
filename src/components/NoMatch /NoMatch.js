import styles from './NoMatch.module.scss';

const NoMatch = () => {
  return (
    <>
      <div class="face" className={styles.face}>
        <div className={styles.band}>
          <div className={styles.red}></div>
          <div className={styles.white}></div>
          <div className={styles.blue}></div>
        </div>
        <div className={styles.eyes}></div>
        <div className={styles.dimples}></div>
        <div className={styles.mouth}></div>
      </div>
      <h1>Oops! Something went wrong!</h1>
      <div className={styles.btn}><a href='/'>Return to Home</a></div>
    </>
  );
};

export default NoMatch;