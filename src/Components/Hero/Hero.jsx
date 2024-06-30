import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/herogirlb.png";
import Image2 from "../../assets/hero/family.png";
import Image3 from "../../assets/hero/herogl.png";
import Image4 from "../../assets/hero/singlegirl.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "Hi u can buy this product any difault value",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Men's Wear",
    description: "Hi u can buy this product any difault value",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on all Men's Wear",
    description: "Hi u can buy this product any difault value",
  },
  {
    id: 3,
    img: Image4,
    title: "Upto 50% off on all Men's Wear",
    description: "Hi u can buy this product any difault value",
  },
];

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden h-[700px] min-h-[400px] sm:min-h-[600px] bg-gray-950 text-white">
      <div className=" h-[700px] w-[700px] bg-[#5959f0]/70 absolute -bottom-1/2 right-0 rounded-3xl rotate-45 -z[8] "></div>
      <div className=" h-[700px] w-[700px] bg-[#1C0C5B] absolute -top-1/2 left-0 rounded-3xl rotate-45 -z[8] "></div>
      <div className="sm:px-[100px] mt-[130px]">
        {/* hero section  */}
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} >
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center  sm:my-[100px] mx-[50px]">
                <div className="flex flex-col justify-center sm:gap-4 py-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button onClick={() => handleOrderPopup()} className="bg-gradient-to-r from-primary to-secondary text-white sm:py-2 px-4 rounded-full hover:scale-[1.1] transition-transform duration-200 mt-1">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] sm:scale-125 scale-105 object-contain mx-auto sm:mr-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
