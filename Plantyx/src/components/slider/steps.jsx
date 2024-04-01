import { useRef } from "react";
import stepImageOne from "../../assets/desktop/Frame-32.png";
import stepImageTwo from "../../assets/desktop/Frame-28.png";
import stepImageThree from "../../assets/desktop/Frame-30.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Steps() {
  const stepsImages = [
    {
      id: 1,
      stepImage: stepImageOne,
      altText: "Step 1 Image",
      stepCount: "STEP 1",
      stepInfo: "We put everything together",
    },
    {
      id: 2,
      stepImage: stepImageTwo,
      altText: "Step 2 Image",
      stepCount: "STEP 2",
      stepInfo: "We provide proper care",
    },
    {
      id: 3,
      stepImage: stepImageThree,
      altText: "Step 3 Image",
      stepCount: "STEP 3",
      stepInfo: "We monitor and adjust",
    },
  ];

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={{
        nextEl: nextButtonRef.current,
        prevEl: prevButtonRef.current,
      }}
      modules={[Navigation, Pagination]}
    

      className="h-[400px] sm:h-[85vh]"
    >
      <div className="flex w-full h-[300px]  border border-black justify-center py-4 relative ">
        {stepsImages.map((image) => (
          <SwiperSlide
            key={image.id}
            className="object-fit m-auto w-80 mySwiper "
          >
            <div className="z-[999] relative sm:absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
              <img
                src={image.stepImage}
                alt={image.altText}
                className="w-80  h-60 m-auto object-cover md:w-[100%] sm:w-full  sm:h-60    "
              />
            </div>

            <figcaption className="bg-[rgb(237,237,237)] text-[#000000]   overflow-hidden flex justify-between items-center sm:items-end px-2 sm:px-8  w-full h-40 absolute bottom-10  sm:h-80 sm:top-40 sm:relative    ">
              <span className="text-sm font-semibold block sm:-translate-y-12">
                {image.stepCount}
              </span>
              <span className="text-sm block swiperPagination font-semilight sm:-translate-y-12 sm:font-semibold sm:text-lg  ">
                {image.stepInfo}
              </span>
              <div className=" flex justify-center gap-4  sm:-translate-y-12 ">
        <div className="button-prev cursor-pointer" ref={prevButtonRef}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85787 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
              stroke="black"
              strokeWidth="0.709555"
            />
            <path
              d="M10.125 6L7.125 9L10.125 12"
              stroke="black"
              strokeWidth="0.709555"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="button-next cursor-pointer" ref={nextButtonRef}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9Z"
              stroke="black"
              strokeWidth="0.709555"
            />
            <path
              d="M7.875 6L10.875 9L7.875 12"
              stroke="black"
              strokeWidth="0.709555"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
            </figcaption>
          </SwiperSlide>
        ))}
      </div>

      
    </Swiper>
  );
}

export default Steps;
