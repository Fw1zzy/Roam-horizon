import styles, { layout } from "../styles";
import { galleryImg } from "../constants";
import ImageSlider from "./ImageSlider";

const Trending = () => {
  return (
    <section className={`${styles.paddingY} mx-10 flex flex-row justify-start items-center max-sx:flex-col`}>

      <div className={`${layout.sectionInfo}`} >
        <div className="bg-green-gradient rounded-xl p-6 w-[600px] mb-8">
          <h1 className={`${styles.heading3} text-white mt-4`}>Trending</h1>
          <p className="font-poppins max-w-full max-sx:max-w-full text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus expedita doloribus molestias at error ipsa facere, ex, sapiente architecto exercitationem nemo. Fuga voluptate reiciendis qui quis suscipit iusto est.</p>
          <button className="outline-0 border-none text-green-900 w-[150px] bg-white font-poppins mt-10 mb-4 px-6 py-3 max-sx:mb-10">View More</button>
        </div>
      </div>

      <div className="max-w-lg rounded-xl"> 
      <ImageSlider autoSlide={true} autoSlideInterval={2000}>
        {galleryImg.map((gallery) => (
          <img src={gallery.img} className="rounded-xl"/>
        ))}
      </ImageSlider>
      
      </div>
    </section>
  )
}

export default Trending
