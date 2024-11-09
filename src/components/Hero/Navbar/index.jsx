import { RxHamburgerMenu } from "react-icons/rx";
import logoImg from "../../../assets/images/Mask group.png";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div className="">
      {/* desktop & tab */}
      <div className="md:flex flex-row justify-between items-center px-20 py-3 hidden">
        {/* left img */}
        <div className="">
          <img src={logoImg} alt="" className=" h-full w-20  rounded-lg" />
        </div>
        <div className="flex flex-row justify-center items-center gap-20">
          {/* middle */}
          <div className=" hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 text-white">
              <li className="">
                <a className="hover:underline">Home</a>
              </li>
              <li className="">
                <a className="hover:underline">About Us</a>
              </li>
              <li className="">
                <a className="hover:underline">Planters</a>
              </li>
              <li className="">
                <a className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          {/* end */}
          <button className="hover:bg-gray-500  border border-white px-8 py-1 rounded-md">
            <a className=" text-white">Call Us</a>
          </button>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden flex flex-row justify-between items-center px-3 py-5">
        {/* hamburger menu */}
        <div onClick={() => setHamburgerMenu(!hamburgerMenu)} className="">
          <RxHamburgerMenu className="h-10 w-10 text-white" />
        </div>
        {/* mobile menu item */}
        {hamburgerMenu && (
          <div className="">
            <div className="md:hidden inset-y-0 bg-gray-800 fixed w-9/12 left-0 z-30 flex flex-col justify-between">
              <div className=" flex flex-col gap-1">
                <ul className="menu menu-vertical px-1 gap-4 py-2 ">
                  <li className="bg-green/50 text-white font-black rounded-lg">
                    <a className="hover:underline">Home</a>
                  </li>
                  <li className="bg-green/50 text-white font-black rounded-lg">
                    <a className="hover:underline">About Us</a>
                  </li>
                  <li className="bg-green/50 text-white font-black rounded-lg">
                    <a className="hover:underline">Planters</a>
                  </li>
                  <li className="bg-green/50 text-white font-black rounded-lg">
                    <a className="hover:underline">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              onClick={() => setHamburgerMenu(!hamburgerMenu)}
              className="md:hidden inset-0 bg-gray-300 fixed right-0 z-20"
            ></div>
          </div>
        )}
        {/* mid */}
        <div>
          <img src={logoImg} alt="" className="" />
        </div>
        {/* right */}
        <div className="border border-white">
          <a className="px-5 text-white text-xl font-medium">Call Us</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
