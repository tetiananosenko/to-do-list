import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
import clsx from 'clsx';
const Favorite = () => {
  const cards = useSelector(state => state.cards.filter(card => card.isFavorite));
  const noCards = !cards.length;
  return (
    <>
      <PageTitle title="Favorite" />

      <h1 className={clsx(styles.text, !noCards && styles.isFavorite)}>There is nothing here</h1>
      <ul className={clsx(styles.cardsFavorite, noCards && styles.isFavorite)}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
      </ul>
    </>
  );
};

export default Favorite;