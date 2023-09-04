import styles from "../styles"

const CTA = () => {
  return (
    <section className={`${styles.marginY} ${styles.marginX}`}>

     <div className={`cta`}>
        <div className="flex flex-col justify-center text-start py-[4rem] px-[2.5rem]">
            <h2 className="font-poppins font-bold text-[3rem] mb-3 leading-[70px] text-white max-ss:text-[2.5rem] max-sm:leading-[60px]">We are ready to provide <br/> the best trip for you</h2>
            <p className="font-poppins leading-7 text-white max-ss:text-[15px]">
              We have a variety of the world's best accommodation perfect for the <br/> destination you will be traveling
            </p>
            <button className="font-poppins text-[16px] outline-0 border-none text-black bg-white my-[2rem] py-[10px] px-[20px] w-[150px] rounded-3xl ">Contact now</button>
        </div>
      </div>
    </section>
  )
}

export default CTA
