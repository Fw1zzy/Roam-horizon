import styles, { layout } from "../styles";
import { maldives } from '../assets';
import { features } from '../constants';

const GetStarted = () => {
  return (
    <section className={`flex flex-row justify-between items-center px-10 mb-10 max-w-full m-auto max-lg:flex-col`} id="about">
      <div className={`${layout.sectionInfo} `}>
        <h2 className="font-poppins text-[40px] text-green-900 leading-[55.8px] w-full font-bold">Experience the fun of Traveling</h2>
        <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">With RoamHorizon you can get the best experience on your holiday travels, and we always update the latest and best destinations in the world</p>
        <img src={maldives} className="w-full h-[300px] object-cover rounded-xl mt-4"/>
      </div>

      <div className={`flex flex-col md:ml-10 ml-0 md:mt-0 mt-10`}>
        {features.map((features, index) => (
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  )
};

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row justify-center items-center p-6 rounded-[20px]  hover:text-white ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[74px] h-[74px] rounded-full outline-none border-0 bg-green-gradient mr-3 ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[40%] h-[40%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[20px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default GetStarted