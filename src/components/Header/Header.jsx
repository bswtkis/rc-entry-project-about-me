import { Logo } from './Logo/Logo';
import styles from './header.module.sass';
export function Header({headerData}) {
  return (
    <header id={styles.header}>
      <Logo logoData={headerData.logo} />
    </header>
  )
}