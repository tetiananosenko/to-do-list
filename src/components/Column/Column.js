import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Column = props => {
  const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id);
  return (
    <article className={styles.column}>
      <h1 className={styles.title}><span className={`${styles.icon} fa fa-${props.icon}`} />{props.title}</h1>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} action={props.action} />
    </article>
  );
};


export default Column;