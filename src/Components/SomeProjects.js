import React from 'react';

function SomeProjects() {
  return (
    <>
        <div className='min-h-[400px] -bg-[red] pt-[40px] some-projects-container bg-[--secondry] w-[100%] px-[100px] leading-[60px] flex'>
    <div className='some-projects-container-left h-[100%] w-[50%] flex items-center'>
    <span>
      <h1 className='some-projects-para font-[600] text-[60px] text-[--primary-text]'>SOME OF THE</h1>
      <h1 className='some-projects-para font-[600] text-[60px] text-[--primary-text]'>MOST IMPRESSIVE</h1>
      <h1 className='some-projects-para font-[600] text-[60px] text-[--primary-text]'>PROJECTS I HAVE</h1>
      <h1 className='some-projects-para font-[600] text-[60px] text-[--primary-text]'>WORKED</h1>
      </span>
    </div>
    <div className='some-projects-container-right h-[100%]  w-[50%] leading-normal flex items-center'>
    <span>
      <p className='some-projects-para-2 font-[200] w-[90%]'>These are some projects that I have worked on and enjoy the most. but I'd be happy to share more about the other projects I've done. Would you like to take a look at them?</p>
      <span className='flex items-center gap-[10px] mt-[15px] some-projects-para-2'>
        <p className='text-[--primary-text] text-[20px]'>All Projects</p>
        <a target='blank' href="https://docs.google.com/document/d/1G1oeCMxX6njb4rSzkzN4en3bZqRWJe_iSXFSpSZWAwY/edit?usp=sharing"><div className='all-projects-circle h-[60px] w-[60px] rounded-full border-[1px] border-[--primary] flex items-center justify-center'>
          <p className='text-[24px] rotate-[-45deg] relative'>-></p>
        </div></a>
      </span>
      </span>
    </div>
    </div>
    </>
  );
}

export default SomeProjects;
