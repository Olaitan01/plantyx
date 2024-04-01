import logo from "../../assets/desktop/Planty-Logo.jpg";
import bloomberg from "../../assets/desktop/Bloomberg.png";
import forbes from "../../assets/desktop/Forbes.png";
import unsplash from "../../assets/desktop/unsplash_YAPZt8wxMO4.png";

function Header() {
  return (
    <header className="box-border sm:w-full">
      <div className="p-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="planty logo" className="w-20  object-contain " />
        </div>
        <div>
          <ul className="hidden gap-10 font-semilight  text-sm text-[#000000] sm:flex ">
            <li className="cursor-pointer">Plants</li>
            <li className="cursor-pointer">For offices</li>
            <li className="cursor-pointer">Plants care</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>
        <div className="flex justify-between items-center  gap-8">
          <button className="block ">
            {" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m13.99 13.196 2.198 2.196a.562.562 0 0 1-.796.796l-2.197-2.197a7.313 7.313 0 1 1 .796-.796zm-5.553 1.43a6.187 6.187 0 1 0 0-12.376 6.187 6.187 0 0 0 0 12.375"
                fill="#000"
              />
            </svg>
          </button>
          <button className="block ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.553 13.018c2.567-.375 4.335-.343 6.905.013a.78.78 0 0 1 .667.776c0 .18-.062.354-.174.491q-.292.357-.598.702h.99q.094-.111.188-.227c.223-.273.344-.614.344-.966 0-.76-.554-1.414-1.314-1.519-2.631-.364-4.47-.399-7.116-.012a1.55 1.55 0 0 0-1.32 1.541c0 .34.11.675.32.947q.093.121.184.236h.966q-.285-.34-.555-.693a.8.8 0 0 1-.165-.49c0-.404.29-.743.678-.8M9 9.375a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m0 .75a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                fill="#000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 15.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5m0 .75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
                fill="#000"
              />
            </svg>
          </button>
          <button className="block ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.284 17.568a1.171 1.171 0 1 0 0-2.342 1.171 1.171 0 0 0 0 2.342m7.116 0a1.171 1.171 0 1 0 0-2.342 1.171 1.171 0 0 0 0 2.342m3.165-13.863a.52.52 0 0 0-.4-.193H5.325l.34 1.041h9.818l-1.39 6.248h-7.81L3.905 3.266a.52.52 0 0 0-.343-.338l-2.135-.656a.523.523 0 0 0-.307 1l1.87.572 2.389 7.549-.854.697-.068.068a1.385 1.385 0 0 0-.041 1.765 1.43 1.43 0 0 0 1.176.52h8.689a.52.52 0 1 0 0-1.04H5.508a.348.348 0 0 1-.292-.521l1.255-1.041h8.038a.52.52 0 0 0 .52-.406l1.65-7.289a.52.52 0 0 0-.114-.442"
                fill="#000"
              />
            </svg>
          </button>
          <button className="block sm:hidden">
            <svg
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H19M0 9H19" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex  gap-1 md:w-full md:gap-8 justify-between items-start py-4">
        <div className="pl-4 ">
          <h1 className="font-semibold text-lg py-4 sm:py-2 sm:text-[3.5rem] sm:leading-[3rem] lg:text-[5rem] md:leading-[5rem] md:pt-14 ">
            Best house <br /> plants varieties.
          </h1>
          <p className="text-xs font-semibold leading-5 pb-2 md:text-[1.5rem] md:leading-8  md:w-80 sm:py-4 ">
            Beautiful living greenery homes and offices
          </p>
          <p className="text-[0.58rem] font-[400] text-gray pb-2 md:text-[1.2rem] md:pb-8">
            
            we&apos;ve been mentioned in the press
          </p>
          <button className="bg-black py-1 px-4 text-center text-white text-[0.6rem] font-[400] rounded-full border-none mb-4 md:text-lg md:mb-14">
            Shop now
          </button>

          <div className="flex justify-between items-center sm:w-[80%]">
            <img className="w-20 block lg:w-40  object-cover" src={bloomberg} alt="Bloomberg" />
            <img className="w-20 block lg:w-40 object-cover" src={forbes} alt="Forbes" />
          </div>
        </div>
        <div >
          <img
            className="w-60 md:w-[700px] sm:object-fill md:h-[80vh] h-auto "
            src={unsplash}
            alt="Two plant vases with green plants"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
