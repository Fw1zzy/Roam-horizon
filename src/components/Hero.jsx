import styles from "../styles";
import { booknow, arrowDown, arrowUp } from "../assets";
import { useState } from "react";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section id='home' className={`${styles.flexCenter} h-[80vh] w-full flex-col flex`}>
      <div className={`${styles.marginY} text-center`}>
        <h1 className={`${styles.heading2} max-sm:text-[50px] max-sm:leading-1 max-xs:mx-2`}>Discover Limitless Horizons</h1>
        <p className={`${styles.paragraph} max-w-5xl max-ss:text-[13px] max-sm:leading-[25.8px]`}>"Embark on a journey of endless possibilities with RoamHorizon. We're your passport to uncharted adventures, where every horizon holds a new story waiting to be written"</p>
      </div>

      <div className="md:hidden flex justify-center items-center mb-[10px]">
        <img src={toggle ? arrowUp : arrowDown} 
          alt="menu"
          className="w-[50px] h-[50px] object-contain"
          onClick={() => setToggle((prev => !prev))}
        />
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
    
      <div className={`${toggle ? 'flex' : 'hidden'} 
       absolute min-w-[240px] px-4 bottom-44 sidebar_down flex-col md:hidden
      `}> 
      <div className="bg-white rounded-xl flex flex-col p-4 absolute ">

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
          
            <button type="submit" className="bg-green-gradient p-4 rounded-full" ><img src={booknow} alt="booknow" className="object-fit w-[14px] "/></button>

        </form>
      </div>
      </div>


      
    </section>
  )
}

export default Hero
