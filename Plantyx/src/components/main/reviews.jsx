import stars from "../../assets/desktop/Review Star's.png";
// import { useRef } from "react";
function Review() {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);

  return (
    <div className="flex flex-col py-6 relative sm:flex-row sm:items-center sm:px-8 sm:justify-between ">
      <div className="text-center sm:text-left">
        <h2 className="font-semibold ">REVIEWS</h2>
        <p className="font-light py-4 text-sm w-60 m-auto sm:text-left sm:text-[1.3rem] sm:leading-6 sm:w-80 sm:self-start">
          Shop with confidance by reading customer reviews given by individuals
          who have used Bioomey. Excelient quality and streamlined service are
          both offered here.
        </p>
        <div className="flex align-center gap-4 justify-center object-fit sm:justify-start">
          <img src={stars} alt="5 star review" className="w-24 " />
          <span className="text-[#000000] font-semibold text-sm">5/5</span>
        </div>
        <p className="hidden sm:block">2,479 reviews</p>
      </div>
      <div className="p-3  w-90 m-auto sm:w-[50%]">
        <p className="text-center font-bold pb-12 sm:w-[80%] sm:text-[1.2rem] sm:text-left  ">
          We adore all our friends at Bloomey, especially the beauties who have
          come to live with us! Great advice when needed, beautifully and safely
          packaged. Highly recommend, it&apos;s just the best place for healthy
          plants and great value!
        </p>
        <p className="font-semibold text-[1.1rem] pl-3 ">Pamela S.</p>
        <p className="font-semilight text-sm pl-3 pt-2">Lake Forest, CA</p>
      </div>

      <div className=" flex gap-4 absolute bottom-11 right-5 z-999 sm:static sm:top-auto sm:left-auto sm:self-start ">
        <div className="button-prev" >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.0833 17.5001C32.0833 25.5542 25.5541 32.0834 17.5 32.0834C9.44581 32.0834 2.91663 25.5542 2.91663 17.5001C2.91663 9.44593 9.44581 2.91675 17.5 2.91675C25.5541 2.91675 32.0833 9.44593 32.0833 17.5001Z"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M19.6875 11.6665L13.8541 17.4998L19.6875 23.3332"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="button-next " >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.91671 17.5001C2.91671 25.5542 9.44589 32.0834 17.5 32.0834C25.5542 32.0834 32.0834 25.5542 32.0834 17.5001C32.0834 9.44593 25.5542 2.91675 17.5 2.91675C9.44589 2.91675 2.91671 9.44593 2.91671 17.5001Z"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M15.3125 11.6665L21.1459 17.4998L15.3125 23.3332"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Review;
