import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

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
                    )
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
                className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-blue-500 hover:bg-blue-500 active:bg-blue-500 active:border-blue-500 hover:text-white transition-all duration-200"
              >
                <FaInstagram className="size-6" />
              </a>
              <a
                href="https://www.tiktok.com/@usrname__0?is_from_webapp=1&sender_device=pc"
                target="_blank"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-blue-500 hover:bg-blue-500 active:bg-blue-500 active:border-blue-500 hover:text-white transition-all duration-200"
              >
                <FaTiktok className="size-5" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-xl mt-8 mb-4 text-white">
                Contact Me
              </h4>
              <div className="flex items-center space-x-3 mb-4">
                <span
                  href="https://wa.me/85775756397"
                  target="_blank"
                  className="text-white"
                >
                  <IoPersonOutline className="size-6" />
                </span>
                <p className="text-white">
                  +62 857-7575-6397 <span className="text-sm">/ Rangga</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen mx-auto px-4 border-t border-gray-500 py-5 text-center text-base text-gray-500">
        &copy; Copyright 2025 | All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;