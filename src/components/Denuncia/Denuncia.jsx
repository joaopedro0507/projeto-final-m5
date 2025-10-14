import { useState, useEffect } from 'react';
import styles from './Denuncia.module.css';

export default function Denuncia() {
  const [denuncias, setDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api-projeto-final-m4.onrender.com/denuncias")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha na resposta do servidor.');
        }
        return response.json();
      })
      .then((data) => {
        setDenuncias(data.denuncias);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setError("Não foi possível carregar as denúncias. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Dados sobre Denúncias de Racismo</h1>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <p className={styles.loading}>Carregando dados...</p>
          </div>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : denuncias.length > 0 ? (
          denuncias.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>Denúncia em {item.estado}</h2>
              <p className={styles.description}>Detalhe: {item.descricao}</p>
              <p className={styles.state}>Estado: {item.estado}</p>
            </div>
          ))
        ) : (
          <p className={styles.emptyMessage}>Nenhuma denúncia encontrada.</p>
        )}
      </div>
    </main>
  );
}