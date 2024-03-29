function Introduction() {
  return (
    <div>
      <div>
       <div className="sm:flex sm:items-center sm:w-full sm:gap-10 sm:py-6 ">
       <p className="m-auto text-center text-[0.8rem] font-extralight leading-5 p-4 w-80 sm:text-left sm:text-[1rem] sm:leading-6 sm:w-[25%] sm:m-0">
          Each houseplant set is handled quickly and safely before being sent to
          your destination in specially designed insulated packaging.
        </p>
        <p className="text-lg text-center font-semibold w-80 m-auto leading-6 sm:text-left sm:text-[1.6rem] sm:leading-6 sm:w-[30%] sm:items-start sm:font-[400] sm:m-0">
          Learn how to take care of your plant at every stage of its journey
          from our greenhouse to your home.
        </p>
       </div>
        <button className="flex gap-5 mx-auto mt-6  text-xs font-semibold items-center pb-4 sm:my-5 sm:mb-16 sm:text-lg
        ">
          LEARN MORE
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_201_693)">
              <rect width="24" height="24" rx="12" fill="black" />
              <path
                d="M6 11.5C5.72386 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.72386 12.5 6 12.5V11.5ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5H18V11.5H6V12.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_201_693">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Introduction;
