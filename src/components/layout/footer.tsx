import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="flex justify-center">
    <div className="max-w-screen-sm p-5 text-center ">
      <div>
        Mathias Michel © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <div>
        <Link to="/imprint">Imprint</Link>
      </div>
    </div>
  </footer>
);
export default Footer;
