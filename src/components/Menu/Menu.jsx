import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>Sobre</li>
        <li className={styles.li}>Mapeamento do Racismo</li>
      </ul>
    </nav>
  );
}
