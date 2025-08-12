import { BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#361c69] to-[#0f0715] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Copyright Section */}
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
        {/* Social Media Section */}
        <div className="flex flex-col items-end">
          <h4 className="text-lg font-bold mb-2">Connect with me</h4>
          <nav className="flex gap-4">
            <a href="https://www.facebook.com/sourav81.bd" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="text-2xl text-white hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://github.com/sourav-dn" target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-2xl text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/sourav-dn/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="text-2xl text-white hover:text-blue-400 transition-colors" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
