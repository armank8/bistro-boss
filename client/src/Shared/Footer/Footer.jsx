import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer text-white gap-0">
        <aside className="bg-[#1F2937] w-full h-[250px] flex  flex-col justify-center items-center">
          <p className="text-2xl font-bold">Contact US</p>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        <nav className="bg-[#111827]  w-full h-[250px] flex  flex-col justify-center items-center">
          <h6 className="footer-title">Follow Us</h6>
          <p>Follow US on social media</p>
          <div className="grid grid-flow-col  gap-6 pt-3">
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaYoutube />
            </a>
            <a>
              <FaInstagram />
            </a>
          </div>
        </nav>
      </div>

      <div className="bg-black text-white p-4">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
