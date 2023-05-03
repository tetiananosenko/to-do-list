import styles from './NavBar.module.scss';
import Container from '../Container/Container';


const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.div} >
          <div className={styles.icon}>
            <span className="fa fa-tasks" />
          </div>
          <div>
            <a href="/" className={styles.text}>Home</a>
            <a href="/favorite" className={styles.text}>Favorite</a>
            <a href="/about" className={styles.text}>About</a>
          </div>
        </div>
      </Container >
    </nav>

  );
};


export default NavBar;