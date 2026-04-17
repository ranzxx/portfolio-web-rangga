import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen mx-auto px-4 w-full py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-7 px-15">
          <div>
            <a
              href="/"
              className="text-xl block mb-5 font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent"
            >
              ranz
            </a>
            <p className="text-gray-400">
              Thanks for visiting! <br /> And we can create something great
              together.
            </p>
          </div>
          <div>
            <div className="flex gap-10">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-4 font-semibold text-xl text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  {["Home", "About", "Skills", "Projects", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-4 text-white">Follow Me</h4>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/ranze921/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-pink-500 hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 bg-gradient-to-br active:from-purple-600 active:via-pink-500 active:to-yellow-400 active:border-pink-500 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="size-6" />
              </a>
              <a
                href="https://www.tiktok.com/@usrname__0?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-black hover:bg-black active:bg-black active:border-black hover:text-white transition-all duration-300"
              >
                <FaTiktok className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rangga-nafie-b736b7379"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-white hover:bg-white active:bg-white active:border-white hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="size-6 group-hover:fill-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen mx-auto px-4 border-t border-gray-500 py-5 text-center text-base text-gray-500">
        &copy; Copyright 2025 | All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
