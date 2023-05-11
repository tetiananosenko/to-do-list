import styles from './PageTitle.module.scss';

const PageTitle = (props) => {
  return (
    <div className={styles.hero}>{props.children}</div>
  );
};

export default PageTitle;
