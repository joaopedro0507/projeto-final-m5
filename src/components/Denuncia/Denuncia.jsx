import { useState, useEffect } from 'react';
import styles from './Denuncia.module.css';
export default function Racismo() {
  // useState
  const [racisms, setRacisms] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    fetch("https://api-projeto-final-m4.onrender.com/denuncias")
      .then((response) => response.json())
      .then((data) => { setRacisms(data.denuncias) })
      .catch((error) => console.error("Erro ao buscar dados:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Denuncias sobre o Racismo Mundial</h1>
      <div>
        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Carregando dados sobre racismo...</p>
          </div>
        ) : racisms.length > 0 ? (
          racisms.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>{item.nome}</h2>
              <p className={styles.description}>{item.descricao}</p>
              <p className={styles.state}>Estado: {item.estado}</p>
            </div>
          ))
        ) : (
          <p>Nenhum dado encontrado.</p>
        )}
      </div>
    </main>
  );
}
