import React from 'react';
import AnimatedLink from '../Components/AnimatedLink';

function Expect() {
  return (
    <>
        <div className='expect-page min-h-[100vh] w-[100%] bg-[--secondry] flex px-[100px] -justify-center'>
        <span className='pt-[120px] -bg-[red]'>
            <i className='text-[--primary-text]'>What you can expect from me:</i>
            <div className='box -bg-[blue] relative h-[50px] w-[55vw] mt-[30px]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'><span className='font-[500]'>User-Centered Design:</span> I prioritize the needs and experiences</div>
                <div className='text-show-1 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'><span className='font-[500]'>User-Centered Design:</span> I prioritize the needs and experiences</div>
            </div>
            <div className='box -bg-[yellow] h-[50px] relative w-[55vw]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'> of users, crafting intuitive and engaging interfaces that</div>
                <div className='text-show-1 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'> of users, crafting intuitive and engaging interfaces that</div>
            </div>
            <div className='box -bg-[yellow] h-[50px] relative w-[55vw]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'>enhance usability and satisfaction.</div>
                <div className='text-show-1 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'>enhance usability and satisfaction.</div>
            </div>
            <div className='box -bg-[blue] relative h-[50px] w-[55vw] mt-[15px]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'><span className='font-[500]'>Responsive and Adaptive Layouts: </span>My designs are optimized</div>
                <div className='text-show-2 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'><span className='font-[500]'>Responsive and Adaptive Layouts: </span>My designs are optimized</div>
            </div>
            <div className='box -bg-[yellow] h-[50px] relative w-[55vw]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'>for all devices, ensuring seamless experiences</div>
                <div className='text-show-2 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'>for all devices, ensuring seamless experiences</div>
            </div>
            <div className='box -bg-[yellow] h-[50px] relative w-[55vw]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'>whether on desktop, tablet, or mobile.</div>
                <div className='text-show-2 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'>whether on desktop, tablet, or mobile.</div>
            </div>
            <div className='box -bg-[blue] relative h-[50px] w-[55vw] mt-[15px]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'><span className='font-[500]'>Attention to Detail:</span> I focus on the finer points, from</div>
                <div className='text-show-3 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'><span className='font-[500]'>Attention to Detail:</span> I focus on the finer points, from</div>
            </div>
            <div className='box -bg-[yellow] h-[50px] relative w-[55vw]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'>typography and color schemes to micro-interactions,</div>
                <div className='text-show-3 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'>typography and color schemes to micro-interactions,</div>
            </div>
            <div className='box -bg-[yellow] h-[50px] relative w-[55vw]'>
                <div className='absolute -bg-[red] text-[25px] font-[400] text-[#9FA1A3] inline-block'>creating polished and professional products.</div>
                <div className='text-show-3 absolute -bg-[red] text-[25px] font-[400] w-[0%] overflow-x-hidden text-nowrap text-[black] inline-block'>creating polished and professional products.</div>
            </div>
            </span>
            <div className='-bg-[blue] w-[40vw] pt-[120px]'>
                <span>
                <i className='text-[--primery-text]'>About me:</i>
                    <p className='text-[--primary-text] font-[200]  mt-[30px]'>My name is Ali Rashid, and I am a Web UI Developer from Pakistan with seven months of freelancing experience in creating engaging and visually appealing user interfaces. I have experience in developing scroll-animated websites, which bring dynamic and interactive experiences to users. Currently, I am pursuing my studies at the Virtual University of Pakistan, while enhancing my skills and knowledge in web development.</p>
                </span>
            </div>
        </div>
    </>
  );
}

export default Expect;
