import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function ImageSlider({ 
  children: galleryImg,
  autoSlide = false,
  autoSlideInterval = 3000,
 }) {

  const [curr, setCurr] = useState(0)

  const prev = () => 
    setCurr((curr) => (curr === 0 ? galleryImg.length - 1 : curr - 1))

  const next = () => 
    setCurr((curr) => (curr === galleryImg.length - 1 ? 0 : curr + 1))

  useEffect (() => {
    if (!autoSlide) return 
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  },[])
  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500 w-[450px] h-[600px] object-fill max-ss:w-[300px] max-ss:h-[450px]" 
      style={{ transform: `translateX(-${curr * 100}%)`}}>{galleryImg}</div>

      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-[100%] transition-all">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <BsChevronCompactLeft size={25}/>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <BsChevronCompactRight size={25}/>
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {galleryImg.map((_, i) => (
            <div className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}
