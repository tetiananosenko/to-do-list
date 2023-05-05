
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsRedux';


const ListForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span className={styles.span}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span className={styles.span}>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>

    </form>
  );
};


export default ListForm;