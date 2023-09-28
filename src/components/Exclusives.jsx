import styles from "../styles";
import { image1, image2, image3, image4, image5, logo2 } from "../assets";

const Exclusives = () => {
  return (
    <section id="destinations" className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className="flex justify-center items-center">
        <h1 className={`${styles.heading3} text-green-900`}>Exclusives</h1>
      </div>
     
      <div className="exclusives mt-8 mx-auto">

        <div className="exclusives_div">
          <img src={image1} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div">
          <img src={image2} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div">
          <img src={image3} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div">
          <img src={image4} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div">
          <img src={image5} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div max-xs:hidden">
          <img src={image1} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div max-xs:hidden">
          <img src={image2} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div max-xs:hidden">
          <img src={image3} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div max-xs:hidden">
          <img src={image4} className="exclusives_img icon"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        <div className="exclusives_div max-xs:hidden">
          <img src={image5} className="exclusives_img"/>
          <span className="exclusives_span">
            <h3 className="font-poppins text-[20px] font-semibold">Place</h3>
            <p className="font-poppins text-[15px] font-semibold">Starts @ $250</p>
          </span>
        </div>
        
      </div>  
    </section>
  )
}

export default Exclusives
