import React from 'react'
import img1 from "../../assets/shirt/shirt.png";
import img2 from "../../assets/shirt/shirt2.png"
import img3 from "../../assets/shirt/shirt3.png"
import img4 from "../../assets/shirt/shirt.png"
import { FaStar } from "react-icons/fa";


const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description: "que odio earum optio eveniet velit quas, expedita exercitationem ex eligendi laboriosam nulla saepe. Explicabo.",
  },
  {
    id: 2,
    img: img2,
    title: "Printed",
    description: "que odio earum optio eveniet velit quas, expedita exercitationem ex eligendi laboriosam nulla saepe. Explicabo.",
  },
  {
    id: 3,
    img: img3,
    title: "Girls T-shirt",
    description: "que odio earum optio eveniet velit quas, expedita exercitationem ex eligendi laboriosam nulla saepe. Explicabo.",
  },
  {
    id: 4,
    img: img4,
    title: "Casual Wear",
    description: "que odio earum optio eveniet velit quas, expedita exercitationem ex eligendi laboriosam nulla saepe. Explicabo.",
  },
]

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="px-8 bg-[#111827]">
        {/* header section  */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-blue-400">
            Top selling products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-white">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicingm odit. Eum sit
            ut perspiciatis, quisquam dolor harum odit similique enim?
          </p>
        </div>
        {/* body section  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-20 md:gap-5 py-10 px-4">
          {ProductsData.map((data) => (
            <div key={data.id} data-aos="zoom-in" className=" rounded-2xl bg-gray-800 hover:bg-[#5959f0] text-white shadow-xl group max-w-[300px] duration-300">
              <div className='h-[100px]'>
                <img
                  src={data.img}
                  alt=""
                  className=" sm:max-w-[140px] max-w-[155px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* detail section  */}
              <div className=' p-4 text-center'>  
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold group-hover:text-black">{data.title}</h1>
                  <p className="group-hover:text-black text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button onClick={() => handleOrderPopup()} className='font-bold bg-gradient-to-r from-blue-300 to-blue-800 hover:scale-105 group-hover:text-black py-1 px-4 rounded-full sm:mt-4 mt-1'>
                    Order
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;