import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <h1>Sobre o Projeto</h1>
      <p>
        Este projeto foi desenvolvido como parte do curso de Programação do PDA. 
        Ele tem como objetivo praticar o uso de React e integração com APIs, 
        criando uma aplicação funcional e moderna.
      </p>

      <p>
        A aplicação apresenta páginas e componentes como Menu, Hero, Denúncias,
        Campanhas e este Sobre, todos organizados em uma estrutura reutilizável
        e responsiva.
      </p>

      <p className={styles.assinatura}>
        Desenvolvido por <strong>Luana Rodrigues</strong> 💻
      </p>
    </section>
  );
}
