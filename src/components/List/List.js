import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector, useDispatch } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { resetSearch } from '../../redux/searchRedux';
import { useParams, Navigate } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';
import { getListById } from '../../redux/listsRedux';



const List = () => {
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetSearch())
    }
  }, [])

  if (!listData) return <Navigate to="/" />

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />
        )}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;