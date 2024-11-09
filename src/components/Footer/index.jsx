import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { PiTwitterLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-footer-bg max-w-7xl w-full mx-auto">
      {/* Top */}
      <div className="text-center flex flex-col items-center py-16">
        <h5 className="text-3xl font-black text-white">
          Feel free to contact us
        </h5>
        <nav>
          <div className="flex flex-row  text-white gap-10 my-8">
            {/* instagram */}
            <a className="w-14">
              <IoLogoInstagram className="h-full w-full border p-3 rounded-full cursor-pointer" />
            </a>
            {/* facebook */}
            <a className="w-14">
              <FiFacebook className="h-full w-full border p-3 rounded-full cursor-pointer" />
            </a>
            {/* twitter */}
            <a className="w-14">
              <PiTwitterLogoThin className="h-full w-full border p-3 rounded-full cursor-pointer" />
            </a>
          </div>
        </nav>
        {/* bottom */}
        <nav className="grid md:grid-flow-col gap-5 md:gap-10 text-white">
          <a className="link link-hover cursor-pointer text-lg font-medium">
            Home
          </a>
          <a className="link link-hover cursor-pointer text-lg font-medium">
            About us
          </a>
          <a className="link link-hover cursor-pointer text-lg font-medium">
            Plants
          </a>
          <a className="link link-hover cursor-pointer text-lg font-medium">
            Delivery
          </a>
          <a className="link link-hover cursor-pointer text-lg font-medium">
            Blog
          </a>
          <a className="link link-hover cursor-pointer text-lg font-medium">
            Contact Us
          </a>
        </nav>
      </div>
      {/* copyright */}
      <div className="bg-black py-2 text-center text-white text-base font-bold">
        Copyright &copy; 2021 Lush. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
