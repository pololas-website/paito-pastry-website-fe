import styles from './divider.module.css';

function Divider({ label }) {
  if (!label) return <hr className={styles.line} />;

  return (
    <div className={styles['label-divider']}>
      <hr className={styles.line} />
      <span>{label}</span>
      <hr className={styles.line} />
    </div>
  );
}

export default Divider;
