import styles from "../styles";
import { booknow, arrowDown, arrowUp } from "../assets";
import { useState } from "react";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section id='home' className={`${styles.flexCenter} h-[80vh] w-full flex-col flex`}>
      <div className={`${styles.paddingY} text-center`}>
        <h1 className={`${styles.heading2} max-sm:text-[50px] max-sm:leading-1 max-xs:mx-2`}>Discover Limitless Horizons</h1>
        <p className={`${styles.paragraph} max-w-5xl max-ss:text-[13px] max-sm:leading-[25.8px]`}>"Embark on a journey of endless possibilities with RoamHorizon. We're your passport to uncharted adventures, where every horizon holds a new story waiting to be written"</p>
      </div>

      <div className="bg-white md:flex hidden m-[20px] py-[10px] px-[6px] rounded-full">
        <form className="flex justify-between items-center text-center">
          <div className="border-r-[1px] border-[#888] px-[50px] max-lx:px-[25px] ">
            <label className="font-poppins font-semibold">Destination</label>
            <input type="text" placeholder="Where are you going?" className="outline-0 border-none  text-gray-400"/>
          </div>
          <div className="border-r-[1px] border-[#888] px-[50px] max-lx:px-[25px]">
            <label className="font-poppins font-semibold">Depart Date</label>
            <input type="date" placeholder="Add date" className="outline-0 border-none text-gray-400 "/>
          </div>
          <div className="border-r-[1px] border-[#888] px-[50px] max-lx:px-[25px]">
            <label className="font-poppins font-semibold">Return Date</label>
            <input type="date" placeholder="Add date" className="outline-0 border-none text-gray-400 "/>
          </div>
          <div className="px-[50px] max-lx:px-[25px]">
            <label className="font-poppins font-semibold">Group Size</label>
            <input type="text" placeholder="How many in your group?" className="outline-0 border-none  text-gray-400"/>
          </div>
          <button type="submit" className="bg-green-gradient p-4 rounded-full border-0 outline-none cursor-pointer ">
          <img src={booknow} alt="booknow" className="w-[25px] h-[25px]"/>
          </button>
        </form>
      </div>

      <div className="md:hidden flex flex-auto justify-center items-center z-[99] ">
        <img src={toggle ? arrowUp : arrowDown} 
          alt="menu"
          className="w-[50px] h-[50px] object-contain"
          onClick={() => setToggle((prev => !prev))}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} absolute bottom-0 right-0 left-0 px-5 pb-5 my-2 min-w-[140px] bg-green-gradient rounded-md sidebar_down flex-col z-[10]
      `}> 
        <ul className="list-none grid grid-cols-2 mt-[3rem]">

          <li className="flex flex-col justify-center items-center mb-5">
            <label className="font-poppins font-semibold text-white">Destination</label>
            <input type="text" placeholder="Where are you going?" className="outline-0 border-none text-gray-400 bg-transparent " />
          </li>

          <li className="flex flex-col justify-center items-center mb-5">
            <label className="font-poppins font-semibold text-white">Depart Date</label>
            <input type="date" placeholder="Add date" className="outline-0 border-none  text-gray-400 bg-transparent"/>
          </li>

          <li className="flex flex-col justify-center items-center mb-5">
            <label className="font-poppins font-semibold text-white">Return Date</label>
            <input type="date" placeholder="Add date" className="outline-0 border-none  text-gray-400 bg-transparent"/>
          </li>

          <li className="flex flex-col justify-center items-center mb-5">
            <label className="font-poppins font-semibold text-white">Group Size</label>
            <input type="text" placeholder="How many in your group?" className="outline-0 border-none text-gray-400 bg-transparent"/>
          </li>
        </ul>
      </div>
    
{/*      <div className={`${toggle ? 'flex' : 'hidden'} 
       sidebar_down flex-col justify-center items-center z-10 md:hidden
      `}> 
      <div className="bg-white max-w-full m-auto rounded-xl flex flex-col p-10">

        <form className="flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center mb-5">
              <label className="font-poppins font-semibold">Destination</label>
              <input type="text" placeholder="Where are you going?" className="outline-0 border-none text-gray-400 " />
            </div>

            <div className="flex flex-col justify-center items-center mb-5">
              <label className="font-poppins font-semibold">Depart Date</label>
              <input type="date" placeholder="Add date" className="outline-0 border-none  text-gray-400"/>
            </div>

            <div className="flex flex-col justify-center items-center mb-5">
              <label className="font-poppins font-semibold">Return Date</label>
              <input type="date" placeholder="Add date" className="outline-0 border-none  text-gray-400"/>
            </div>

            <div className="flex flex-col justify-center items-center mb-5">
              <label className="font-poppins font-semibold">Group Size</label>
              <input type="text" placeholder="How many in your group?" className="outline-0 border-none  text-gray-400"/>
            </div>
          
            <button type="submit" className="z-10 bg-green-gradient p-4 rounded-full" ><img src={booknow} alt="booknow" className="object-fit w-[14px] "/></button>

        </form>
      </div>
  */}
      
    </section>
  )
}

export default Hero
