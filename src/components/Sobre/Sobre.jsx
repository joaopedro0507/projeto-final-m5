import React from "react";
import styles from "./Sobre.module.css";
import campanhaImg from "../../assets/istockphoto-1297234871-612x612.jpg"; 

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <h1>Sobre a Campanha</h1>

      <img 
        src={campanhaImg} 
        alt="Campanha Antirracismo" 
        className={styles.imagem}
      />

      <p>
        Esta campanha tem como objetivo promover a conscientização sobre o racismo 
        e estimular atitudes de respeito e igualdade. Vivemos em uma sociedade diversa,
        e é fundamental que todos compreendam a importância de combater discriminações
        raciais em qualquer ambiente, seja escolar, profissional ou social.
      </p>

      <p>
        A campanha reforça que o racismo é inaceitável e que cada pessoa pode contribuir
        para construir uma cultura de inclusão, empatia e justiça.  
        A ideia é informar, engajar e inspirar mudanças reais no comportamento e na mentalidade.
      </p>

    </section>
  );
}
