import './Footer.module.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Campanha Contra o Racismo</h3>
        <p>Juntos por uma sociedade mais justa, igualitária e sem preconceito ✊🏽</p>

        <ul className="socials">
          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 | Projeto Mapeamento do Racismo | Desenvolvido por Júlia, João Pedro, Luana, Kauanny, Erick e Ághata. 💻</p>
      </div>
    </footer>
  );
}
