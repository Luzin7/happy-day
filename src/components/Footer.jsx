import React from "react";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span>
          Desenvolvido por{" "}
          <a href="http://github.com/luzin7" target="_blank" rel="noreferrer">
            Luan Victor
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
