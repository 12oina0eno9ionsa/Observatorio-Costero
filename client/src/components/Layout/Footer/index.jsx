import './style.css';

const Footer = () => {
  return (
    <footer className="general_footer">
      <span className="copyright">Foro Borde Costero, {new Date().getFullYear()}.</span>
      <ul>
        <li className="footer_link">
          <a href="https://usm.cl/en/home/" target="_blank" rel="noopener noreferrer">Usm</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
