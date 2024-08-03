import React from 'react';

function Skill() {
  return (
    <>
        <div className='skill-container min-h-[300px] py-[40px] flex flex-col justify-center bg-[--primary] w-[100%] px-[100px] rounded-t-[25px]'>
        <div className='flex flex-wrap justify-center items-center gap-x-[15px] gap-y-[10px]'>
        <button className='circle-scale skill-btn skill-btn1 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>HTML</button>
        <button className='circle-scale skill-btn skill-btn2 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>CSS</button>
        <button className='circle-scale skill-btn skill-btn3 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Java script</button>
        <button className='circle-scale skill-btn skill-btn4 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>React js</button>
        <button className='circle-scale skill-btn skill-btn5 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Next js</button>
        <button className='circle-scale skill-btn skill-btn6 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Tailwind css</button>
        <button className='circle-scale skill-btn skill-btn7 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Bootstrap</button>
        <button className='circle-scale skill-btn skill-btn8 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Responsive web design</button>
        <button className='circle-scale skill-btn skill-btn9 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Smooth Scrolling</button>
        <button className='circle-scale skill-btn skill-btn10 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Animation on Scroll</button>
        <button className='circle-scale skill-btn skill-btn11 px-[30px] py-[10px] border border-[--secondry-text] rounded-[25px] text-[--secondry-text]'>Animated websites</button>
        </div>
        </div>
        
    </>
  );
}

export default Skill;
