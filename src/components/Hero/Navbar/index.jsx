import { RxHamburgerMenu } from "react-icons/rx";
import logoImg from "../../../assets/images/Mask group.png";

const Navbar = () => {
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
        <div className="">
          <RxHamburgerMenu className="h-10 w-10 text-white" />
        </div>
        {/* mid */}
        <div className="">
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
