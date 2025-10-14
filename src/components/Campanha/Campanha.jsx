import { useState, useEffect } from 'react';
import styles from './Campanha.module.css';

export default function Campanha() {
  const [campanhas, setCampanhas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api-projeto-final-m4.onrender.com/campanhas")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha na resposta do servidor.');
        }
        return response.json();
      })
      .then((data) => { setCampanhas(data.campanhas) })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setError("Não foi possível carregar as campanhas. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main} id="campanha">
      <h1 className={styles.mainTitle}>Campanhas sobre o Racismo Mundial</h1>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <p className={styles.loading}>Carregando dados sobre campanhas...</p>
          </div>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : campanhas.length > 0 ? (
          campanhas.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>{item.nome}</h2>
              <p className={styles.description}>{item.descricao}</p>
            </div>
          ))
        ) : (
          <p className={styles.emptyMessage}>Nenhuma campanha encontrada.</p>
        )}
      </div>
    </main>
  );
}