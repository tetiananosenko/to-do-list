import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  }
  const trashClick = (event) => {
    event.preventDefault();
    dispatch(removeCard(props.id));
  }
  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <span className={clsx(styles.icon, props.isFavorite && styles.isFavorite)} onClick={handleSubmit}>
          <i className='fa fa-star-o'></i>
        </span>
        <i className='fa fa-trash ' onClick={trashClick}></i>
      </div>
    </li>
  );
};

export default Card;