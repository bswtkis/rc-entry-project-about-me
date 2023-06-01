import styles from './logo.module.sass';
export function Logo({logoData}) {
  return (
    <div id={styles.logo}>
      <img src={logoData.src} alt={logoData.alt} />
    </div>
  );
}
