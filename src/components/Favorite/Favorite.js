import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
import clsx from 'clsx';
const Favorite = () => {
  const cards = useSelector(state => state.cards.filter(card => card.isFavorite === true));
  return (
    <>
      <PageTitle title="Favorite" />
      <ul className={styles.cardsFavorite}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
      </ul>
    </>
  );
};

export default Favorite;