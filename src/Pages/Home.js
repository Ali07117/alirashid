import React from 'react';
import Nav from '../Components/Nav';

function Home() {
  return (
    <>
       <div className="home h-[100vh] w-[100%] -bg-[red] relative overflow-x-hidden">
      <Nav/>
      <div className='side-nav flex flex-col justify-between py-[30px] px-[10px] h-[100vh] w-[300px] bg-[#0d0d0d] fixed top-[0] right-[0] z-[9] translate-x-[130%]'>
            <div className="-nav-right flex flex-col gap-[20px]">
            <img className='cursor-pointer h-[30px] side-nav-close-arrow' src="/assets/sidenav-close.svg" alt="" />
            <div className=' border-b status-box-sidebar translate-x-[120%]'>
                <i className='text-[--secondry-text]'>Status:</i>
                <p className='text-[--secondry-text] font-[500]'>Available for freelance projects</p>
            </div>
            <div className=' border-b location-box-sidebar translate-x-[120%]'>
                <i className='text-[--secondry-text]'>Location:</i>
                <p className='text-[--secondry-text] font-[500]'>Pakistan</p>
            </div>
            <div className='border-b sitemap-box-sidebar translate-x-[120%]'>
                <i className='text-[--secondry-text] font-[]'>Sitemap:</i>
                <div className='overflow-y-hidden -bg-[red] h-[25px] hover-text cursor-pointer'>
                <p className='text-[--secondry-text] font-[500] aboutme -bg-[red]'>
                    <div className='inline-block animate-text'>A</div>
                    <div className='inline-block animate-text'>b</div>
                    <div className='inline-block animate-text'>o</div>
                    <div className='inline-block animate-text'>u</div>
                    <div className='inline-block animate-text'>t </div>
                    <div className='inline-block animate-text ml-[5px]'>m</div>
                    <div className='inline-block animate-text'>e</div>
                </p>
                <p className='text-[--secondry-text] font-[500] aboutme  -bg-[red]'>
                    <div className='inline-block animate-text'>A</div>
                    <div className='inline-block animate-text'>b</div>
                    <div className='inline-block animate-text'>o</div>
                    <div className='inline-block animate-text'>u</div>
                    <div className='inline-block animate-text'>t</div>
                    <div className='inline-block animate-text ml-[5px]'>m</div>
                    <div className='inline-block animate-text'>e</div>
                </p>
                </div>
               
            </div>
            </div>
            <div className='flex flex-col -personal-links-box personal-links-sidebar circle-scale inline-block translate-x-[120%]'>
            <a className='email-text text-[--secondry]' href="mailto:alirashiddev@gmail.com">alirashiddev@gmail.com</a>
            <p className='number-text text-[--secondry]'>+923267751511</p>
            <span className='social-box'>
            <a className='text-[--secondry] ' href="">Instagram,</a>
            <a className='text-[--secondry] ' href=""> Linkedin</a>
            </span>
        </div>
      </div>
      <div className="home-text hero absolute bottom-[60px] px-[40px] flex justify-between items-end w-[100%]">
      <span className='leading-text leading-[145px]'>
        <p className='text-[--secondry] text-[140px] font-[700]'>
        <div className='inline-block hero-text freelancer-text'>F</div>
        <div className='inline-block hero-text freelancer-text'>R</div>
        <div className='inline-block hero-text freelancer-text'>E</div>
        <div className='inline-block hero-text freelancer-text'>E</div>
        <div className='inline-block hero-text freelancer-text'>L</div>
        <div className='inline-block hero-text freelancer-text'>A</div>
        <div className='inline-block hero-text freelancer-text'>N</div>
        <div className='inline-block hero-text freelancer-text'>C</div>
        <div className='inline-block hero-text freelancer-text'>E</div>
        <div className='inline-block hero-text freelancer-text'>R</div>
        </p>
        <p className='text-[--secondry] hero-text text-[140px] font-[700]'>
        UI DEVELOPER
        </p>
        </span>
        <span className='flex flex-col personal-links-box circle-scale inline-block'>
            <a className='email-text text-[--secondry]' href="mailto:alirashiddev@gmail.com">alirashiddev@gmail.com</a>
            <p className='number-text text-[--secondry]'>+923267751511</p>
            <span className='social-box'>
            <a className='text-[--secondry] ' href="">Instagram,</a>
            <a className='text-[--secondry] ' href=""> Linkedin</a>
            </span>
        </span>
      </div>
      <div className="marque flex items-center gap-[20px] -h-[40px] absolute bottom-[0px]">
      <div className="slide flex items-center gap-[20px]">
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Ui design</p>
        <p className='text-[--secondry] text-[24px] pb-[10px] font-[900] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Ecommerce website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Animate on scroll</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Landingpage</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Company profile</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Business website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Social media</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Animated website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Smooth Scroll</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
      </div>
      <div className="slide flex items-center gap-[20px]">
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Ui design</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[900] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Ecommerce website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Animate on scroll</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Landingpage</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Company profile</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Business website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Social media</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Animated website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Smooth Scroll</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
      </div>
      <div className="slide flex items-center gap-[20px]">
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Ui design</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[900] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Ecommerce website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Animate on scroll</p>
        <p className='text-[--secondry] text-[24px] pb-[10px]  font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Landingpage</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Company profile</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Business website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Social media</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Animated website</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
        <p className='text-[--secondry] text-[18px] marque-text font-[500] text-nowrap'>Smooth Scroll</p>
        <p className='text-[--secondry] text-[24px]  pb-[10px] font-[500] text-nowrap'>.</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default Home;
