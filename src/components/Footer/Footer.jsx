import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-3">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Developed</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.facebook.com/programmingHero" target="_blank">
            <FaFacebook className="text-3xl " />
          </Link>
          <Link
            to="https://www.youtube.com/@ProgrammingHeroCommunity"
            target="_blank"
          >
            <FaYoutube className="text-3xl " />
          </Link>
          <Link
            to="https://www.linkedin.com/company/programminghero?originalSubdomain=bd "
            target="_blank"
          >
            <FaLinkedin className="text-3xl " />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by My
          Hero.io
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
