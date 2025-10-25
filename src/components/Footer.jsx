import { FaDiscord, FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logoImage from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-base-content border-t border-gray-200">
      <div className="max-w-11/12 mx-auto p-10 ">
        <div className="footer sm:footer-horizontal grid grid-col-12 gap-6">
          <aside className="col-span-6">
            <a>
              <img src={logoImage} className="w-[300px]" alt="" />
            </a>
          </aside>
          <nav className="col-span-2">
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover text-neutral-700 font-semibold">GigaGadgets</a>
            <a className="link link-hover text-neutral-700 font-semibold">Home</a>
          </nav>
          <nav className="col-span-2">
            <h6 className="footer-title">Follow us</h6>
            <a className="link link-hover text-neutral-700 font-semibold">Github</a>
            <a className="link link-hover text-neutral-700 font-semibold">Discord</a>
          </nav>
          <nav className="col-span-2">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover text-neutral-700 font-semibold">Privacy policy</a>
            <a className="link link-hover text-neutral-700 font-semibold">Terms & Confitions</a>
            <a className="link link-hover text-neutral-700 font-semibold">Cookie policy</a>
          </nav>
        </div>
        <div className="border-b border-gray-300 my-6"></div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500">© 2023 Gigagadgets™. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-2xl text-blue-500 ">
              <FaFacebook />
            </Link>
            <Link to="/" className="text-2xl text-[#728ae2]">
              <FaDiscord />
            </Link>
            <Link to="/" className="text-2xl text-blue-400">
              <FaTwitter />
            </Link>
            <Link to="/" className="text-2xl text-neutral-700">
              <FaGithub />
            </Link>
            <Link to="/" className="text-2xl text-pink-500">
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;