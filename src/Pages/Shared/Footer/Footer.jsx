import { BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gradient-to-br from-[#361c69] to-[#0f0715] text-white font-semibold items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/sourav81.bd">
          <BsFacebook className="text-2xl text-blue-600" />
        </a>
        <a href="https://github.com/sourav-dn" target="_blank" rel="noopener noreferrer">
          <BsGithub className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.linkedin.com/in/sourav-dn/">
          <BsLinkedin className="text-2xl text-blue-700" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
