import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
const Favorite = () => {
  const cards = useSelector(state => state.cards.filter(card => card.isFavorite === true));

  console.log(cards);
  return ( 
    <>
    <PageTitle title="Favorite" text="A simple to-do app, with lists, columns and card"/>
      <ul className={styles.cardsFavorite}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
      </ul>
    </>
  );
};

export default Favorite;