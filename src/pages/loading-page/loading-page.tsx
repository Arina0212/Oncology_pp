import ReactLoading from 'react-loading';
import styles from './loading.module.css';

export default function LoadingPage(): JSX.Element {
  return (
    <div className={styles.load} data-testid="LoadingPage">
      {/* <h1 className={styles.loadertext}>Загрузка</h1> */}
      <ReactLoading type="balls" className={styles.loader} color="#FF0000"/>
    </div>
  );
}
