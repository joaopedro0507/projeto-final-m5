import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mostrarDenuncia, setMostrarDenuncia] = useState(false);

  const handleDenunciar = () => {
    setMostrarDenuncia(!mostrarDenuncia);
  };

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        <div className={styles.texto}>
          <h1>Campanha Antirracismo</h1>
          <p>
            A luta contra o racismo começa com a conscientização e a ação.
            Denuncie práticas discriminatórias e ajude a construir uma sociedade mais justa.
          </p>

          <div className={styles.botoes}>
            <a
              href="https://www.gov.br/mdh/pt-br/ondh" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botaoPrincipal}
            >
              Saiba mais
            </a>

            <button onClick={handleDenunciar} className={styles.botaoSecundario}>
              Denunciar
            </button>
          </div>

          {mostrarDenuncia && (
            <div className={styles.denunciaBox}>
              <h3>📞 Canais de Denúncia</h3>
              <p>
                Disque <strong>100</strong> — Canal de Direitos Humanos <br />
                ou acesse o site:{" "}
                <a
                  href="https://www.gov.br/mdh/pt-br/ondh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gov.br/mdh/ondh
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}