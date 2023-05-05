import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  }
  return (
    <li className={styles.card}>
      {props.title}
      <span className={clsx(props.isFavorite && styles.isFavorite)} onClick={handleSubmit}>
        <i className='fa fa-star-o'></i>
      </span>
    </li>
  );
};

export default Card;