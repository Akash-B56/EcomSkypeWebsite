import React from 'react'
import { FaStar } from "react-icons/fa";
import Image1 from "../../assets/boygirl/boy2.jpg";
import Image2 from "../../assets/boygirl/boy3.jpg";
import Image3 from "../../assets/boygirl/boy4.jpg";
import Image4 from "../../assets/boygirl/boy5.jpg";
import Image5 from "../../assets/boygirl/boy6.jpg";
import Image6 from "../../assets/boygirl/boy7.jpg";
import Image7 from "../../assets/boygirl/boy8.jpg";
import Image8 from "../../assets/boygirl/boy9.jpg";


const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "Full Shirt",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    title: "T-shirt & Trouser",
    rating: 5.0,
    color: "light golden & blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    title: "half shirt ",
    rating: 4.0,
    color: "Grey & Black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Image4,
    title: "full_shirt & jeens",
    rating: 4.5,
    color: "white & dark Blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Image5,
    title: "T-shirt",
    rating: 5.0,
    color: "white",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Image6,
    title: "T-shirt",
    rating: 3.9,
    color: "black & grey",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Image7,
    title: "T-shirt",
    rating: 4.1,
    color: "Ghee",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Image8,
    title: "T-shirt",
    rating: 4.7,
    color: "white",
    aosDelay: "1400",
  },
]

const MensWear = () => {
  return (
    <div className='bg-[#111827]'>
      <div className=' py-10'>
        {/* header section  */}
        <div className="text-center py-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-500">Top selling products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-white">Men's Wear</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicingm odit. Eum sit
            ut perspiciatis, quisquam dolor harum odit similique enim?
          </p>
        </div>
        {/* body section  */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 place-items-center gap-3 px-4 ">
            {/* card section  */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 "
              >
                <img
                  src={data.img}
                  alt=""
                  className="sm:h-[220px] h-[250px] sm:w-[150px] w-[200px] object-cover rounded-md "
                />
                <div>
                  <h3 className="font-semibold text-white">{data.title}</h3>
                  <p className="text-sm text-gray-400">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className='text-gray-400'>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All products  */}
          <div data-aos="fade-up" className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-125 transform transition-all duration-500">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MensWear;