import * as React from "react";
import { Link } from "gatsby";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="row">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Liens utiles
                      </Link>
                    </li>                    
                  </ul>
                </section>
              </div>              
            </div>
          </div>
          <div>
            <p>Site hebergé chez Netlify</p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
