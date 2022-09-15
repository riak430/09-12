import React from 'react';

//import image
import Image from '../assets/img/background-img.jpg';

//import components
import Search from '../components/Search';
const Banner = () => {
    return(
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex  flex-col items-center lg:items-start text-centerlg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'><span className='text-green-700'>Rent </span>Your Dream House With Us. </h1>
                    <p>Officia proident duis deserunt eu sunt dolor id adipisicing voluptate nisi mollit. Veniam consectetur dolor voluptate et quis tempor labore do laborum consectetur adipisicing consequat fugiat proident. Nisi do enim cupidatat eiusmod. Commodo cupidatat et anim id proident in deserunt qui ad.</p>
                </div>
                {/*Image*/}
                <div className=' flex-1 lg:flex justify-end items-end'>
                    <img className='w-[800px] h-[450px] rounded-tl-[100px]' alt='' src={Image}/>
                </div>
            </div>
            <Search/>
        </section>
    )
}
export default Banner;