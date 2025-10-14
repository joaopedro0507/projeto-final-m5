import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><a href="#inicio" className={styles.link}>Início</a></li>
        <li className={styles.li}><a href="#sobre" className={styles.link}>Sobre</a></li>
        <li className={styles.li}><a href="#campanha" className={styles.link}>Campanha</a></li>
        <li className={styles.li}><a href="#denuncia" className={styles.link}>Denúncia</a></li>
      </ul>
    </nav>
  );
}
