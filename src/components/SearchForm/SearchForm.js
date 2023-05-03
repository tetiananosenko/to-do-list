import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../redux/store';

const SearchForm = () => {
  const [value, setValue] = useState('');
  // let search = useSelector(state => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSearch( value ));
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput onChange={(event) => setValue(event.target.value)} value={value} placeholder="Search..." />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};


export default SearchForm;