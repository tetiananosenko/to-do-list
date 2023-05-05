import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.div} >
          <div className={styles.icon}>
            <span className="fa fa-tasks" />
          </div>
          <ul className={styles.wrapper}>
            <li className={styles.text}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/">Home</NavLink></li>
            <li className={styles.text}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/favorite">Favorite</NavLink></li>
            <li className={styles.text}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container >
    </nav>

  );
};


export default NavBar;