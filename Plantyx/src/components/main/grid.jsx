import frame1 from '../../assets/desktop/Frame-35.png'
import frame2 from '../../assets/desktop/lakeisha-bennett-WzP3YnV9T-U-unsplash.jpg'
import frame3 from '../../assets/desktop/Frame-34.png'

function Grids(){
    return(
        <div className='p-4'>
            <div className='flex flex-col gap-2 sm:gap-6'>
            <div className='flex justify-center items-stretch gap-2 sm:gap-6 '>
                <div >
                    <img src={frame1} alt="A space with green plants" className='w-60 h-full object-cover  sm:w-full' />
                </div>
                <div >
                    <img src={frame3} alt="A space with green plants" className='w-60 object-cover h-full sm:w-full' />
                </div>
            </div>
            <div className='relative sm:w-[87.5%] sm:m-auto'>
                <img src={frame2} alt="A space with green plants" className=' object-cover h-60 w-full   sm:h-[80vh] sm:object-cover '/>
                <div className='absolute sm:top-20 sm:left-40 top-4 left-4'>
                    <p className='font-semibold sm:text-[3rem] sm:w-[60%] w-40'>Get inspired from our Instagram</p>
                    <p className='font-light sm:text-sm sm:w-[50%] sm:py-2 text-[0.8rem] w-60 py-2'>If you use the hashtag #bloomey on Instagram well spotlight you.</p>
                    <p className='font-semibold flex gap-4 sm:text-sm text-[0.8rem]'>Check it out <span className='block '><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="12" fill="black"/>
<path d="M6 11.5C5.72386 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.72386 12.5 6 12.5V11.5ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5H18V11.5H6V12.5Z" fill="white"/>
</svg>
</span> </p>
                </div>
            </div>
            </div>

           <div className='sm:flex  sm:w-[88%] sm:m-auto  sm:justify-between sm:items-center sm:pt-8'>
           <p className='text-[#000000] font-semibold text-lg flex justify-center py-5 sm:text-[2.4rem] sm:leading-10 '>Stay update with special offers, <br /> plant-parenting tips, and more.</p>
            <div className=" flex justify-between items-center  border-b-2  border-[#000000] mb-2 w-80 m-auto outline-none sm:m-0 ">
        <input
          type="text"
          placeholder="Your email"
          className="text-sm outline-none"
        />
        <button className="bg-[#000000] rounded-full p-1 px-5 text-[#ffffff] text-[0.75rem] mb-1">
          Subscribe
        </button>
        
      </div>
           </div>
        </div>
    )
}
export default Grids