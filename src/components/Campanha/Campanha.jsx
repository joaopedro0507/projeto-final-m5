import { useState, useEffect } from 'react';
import styles from './Campanha.module.css';

export default function Racismo() {
  // useState
  const [racisms, setRacisms] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    fetch("https://api-projeto-final-m4.onrender.com/campanhas")
      .then((response) => response.json())
      .then((data) => { setRacisms(data.campanhas || []) })
      .catch((error) => console.error("Erro ao buscar dados:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main id="campanhas-container" className={styles.container}>
      <section id="intro" className={styles.introSection}>
        <h1 id="campanhas-title" className={styles.heading}>
          Campanhas sobre o Racismo Mundial
        </h1>
        <p className={styles.introText}>
          O combate ao racismo é uma responsabilidade global. Por meio de campanhas
          educativas e ações sociais, buscamos construir um mundo mais justo,
          consciente e igualitário. Este espaço apresenta campanhas reais e fictícias
          criadas para inspirar a mudança.
        </p>
      </section>

      {/* Seção de cards (dados da API) */}
      <section id="lista-campanhas" className={styles.cardsSection}>
        {loading ? (
          <div id="loader-container" className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Carregando dados sobre campanhas...</p>
          </div>
        ) : racisms.length > 0 ? (
          <>
            <p id="total-campanhas" className={styles.total}>
              Total de campanhas cadastradas: {racisms.length}
            </p>
            <div id="cards-grid" className={styles.grid}>
              {racisms.map((item) => (
                <div key={item.id} id={`campanha-${item.id}`} className={styles.card}>
                  {/* Espaço reservado para imagens futuras */}
                  <div className={styles.imagePlaceholder}>
                    <p>Imagem da campanha</p>
                  </div>

                  <h2 className={styles.title}>{item.nome}</h2>
                  <p className={styles.description}>{item.descricao}</p>

                  {item.estado && (
                    <p className={styles.estado}>
                      <strong>Estado:</strong> {item.estado}
                    </p>
                  )}
                  {item.data && (
                    <p className={styles.data}>
                      <strong>Data de criação:</strong> {item.data}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Nenhum dado encontrado.</p>
        )}
      </section>

      {/* Seção informativa extra */}
      <section id="dados-ibge" className={styles.infoSection}>
        <h2>📊 Dados do IBGE sobre desigualdade racial</h2>
        <p>
          De acordo com o <strong>IBGE</strong>, pessoas pretas e pardas representam
          mais de <strong>56% da população brasileira</strong>, mas ainda sofrem com
          desigualdades significativas em várias áreas da sociedade:
        </p>
        <ul>
          <li>
            A renda média de pessoas brancas é cerca de <strong>70% maior</strong> do que
            a de pessoas pretas e pardas.
          </li>
          <li>
            O desemprego entre pessoas negras é <strong>quase o dobro</strong> em
            comparação com pessoas brancas.
          </li>
          <li>
            No acesso à educação superior, menos de <strong>20%</strong> das pessoas negras
            conseguem chegar à universidade.
          </li>
        </ul>
      </section>

      <section id="importancia" className={styles.importanciaSection}>
        <h2>🌍 Por que campanhas como esta são essenciais?</h2>
        <p>
          O racismo ainda é uma realidade global que afeta milhões de pessoas todos os dias.
          Campanhas como estas têm o poder de <strong>educar, conscientizar e mobilizar</strong>
          a sociedade para quebrar estereótipos, promover respeito e garantir direitos iguais.
        </p>
        <p>
          Além disso, projetos digitais antirracistas como este combinam
          <strong> tecnologia, educação e empatia </strong> — mostrando como o
          desenvolvimento web pode ser uma ferramenta de transformação social.
        </p>
        <p>
          Nosso objetivo é criar um espaço de <strong>informação, denúncia e reflexão</strong>,
          incentivando atitudes antirracistas dentro e fora da internet.
        </p>
      </section>
    </main>
  );
}
