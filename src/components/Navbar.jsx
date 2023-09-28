import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="logo" className='w-[200px] cursor-pointer'/>
      
      <ul className="list-none md:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text=[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a className={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <button type="button" className=
      "bg-white text-black py-2 px-4 rounded-3xl font-poppins font-normal md:flex hidden justify-end items-center"
      >Register Now</button>
      
      <div className="md:hidden flex flex-1 justify-end items-center z-[99]">
        <img src={toggle ? close : menu} 
          alt="menu"
          className="w-[30px] h-[30px] object-contain"
          onClick={() => setToggle((prev => !prev))}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} 
      bg-green-gradient absolute p-10 my-2 w-full rounded-md sidebar flex-col z-[98]
      `}> 

      <ul className="list-none flex flex-col justify-center items-center mt-[3rem]">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text=[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                  <a className={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
      </ul>
            <button type="button" className=
            "bg-white text-black py-2 px-4 rounded-3xl font-poppins font-normal flex flex-col justify-center items-center mt-8"
            >Register Now</button>

      </div>
    </nav>
  )
}

export default Navbar
