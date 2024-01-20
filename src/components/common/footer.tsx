import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Thiry Maximilien. Tous droits
          réservés.
        </p>
        <div>
          <p>Codée avec Next et TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
