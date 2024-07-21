import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-neutral text-base-content p-4">
        <aside>
          <p className=" text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by <Link className="link link-primary" to='https://t.me/anvarov06042002' target="_blank">Davronbek Anvarov</Link>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
