import { Swiper, SwiperSlide } from "swiper/react";

import stepImageOne from "../../assets/desktop/Frame-32.png";
import stepImageTwo from "../../assets/desktop/Frame-28.png";
import stepImageThree from "../../assets/desktop/Frame-30.png";

function Product() {
  const stepsImages = [
    {
      id: 1,
      stepImage: stepImageOne,
      altText: "Step 1 Image",
      productName: "Fiddle-leaf",
      price: "$110.99",
    },
    {
      id: 2,
      stepImage: stepImageTwo,
      altText: "Step 2 Image",
      productName: "Aloe Vera",
      price: "$110.99",
    },
    {
      id: 3,
      stepImage: stepImageThree,
      altText: "Step 3 Image",
      productName: "Strelitizia nico",
      price: "$110.99",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      breakpoints={{
        480:{
          slidesPerView: 3,
          centeredSlides :false
        }
      }
        
      }
      className="bg-white flex flex-col-reverse sm:px-4"
    >
      <div className="flex justify-center gap-4 items-baseline py-4 sm:py-0 sm:justify-self-start sm:flex-col ">
        <p className="text-sm hidden sm;block">OUR SHOP</p>
        <p className="text-lg font-bold sm:text-[1.5rem]">
          Here are the best seller <br /> from out varities
        </p>
        <button className="    text-xs font-semibold bg-[#000000] rounded-full text-[#ffffff] py-2 px-4 ">
          
          See All
        </button>
      </div>

      <div>
        {stepsImages.map((image) => (
          <SwiperSlide
            key={image.id}
            className=" m-auto w-80  mySwiper sm:w-full  sm:mt-6  "
          >
            <div >
              <img
                src={image.stepImage}
                alt={image.altText}
                className="w-80 sm:w-full h-60 m-auto object-cover "
                
              />
            </div>
            <figcaption className=" text-[#000000] overflow-hidden flex justify-between items-center  p-5  ">
              <span className="text-sm font-semibold block">
                
                {image.productName}
              </span>
              <span className="text-sm block swiperPagination font-semilight ">
                {image.price}
              </span>
            </figcaption>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

export default Product;
