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
      <button type="button" className="bg-white text-black py-2 px-4 rounded-3xl font-poppins font-normal md:flex hidden justify-end items-center"
      >Register Now</button>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[99]">
        <img src={toggle ? close : menu} 
          alt="menu"
          className="w-[30px] h-[30px] object-contain "
          onClick={() => setToggle((prev => !prev))}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} absolute top-0 right-0 left-0 p-7 my-2 min-w-[140px] bg-green-gradient rounded-md sidebar flex-col z-[10]
      `}> 
        <ul className="list-none flex flex-col justify-center items-center mt-[3rem]">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text=[18px] dark:text-slate-100 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} textcolor1`}
                >
                  <a href={nav.id} className="nav-icon">
                    {nav.title}
                  </a>
                </li>
              ))}
               <button type="button" className="bg-white text-black py-2 px-4 mt-10 rounded-3xl font-poppins font-normal justify-center items-center"
      >Register Now</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
