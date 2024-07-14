import React from 'react';
import Eyes from '../Components/Eyes';

function Footer() {
  return (
    <>
    <div className='-min-h-[100vh] web-footer w-[100%] bg-[--secondry]'>
    <div className="footer-upper-section px-[100px]  -border-t pt-[100px]">
        <div className='footer-got-project-text border-b-[1px] border-b-[--primary] pb-[70px]'>
            <i className='text-[--primary-text]'>That's all for now:</i>
            <p className='text-[--primary-text] text-[40px] footer-engaging-text font-[400] mt-[10px] '>Got a project in mind? <br /> Let’s talk</p>
        </div>
        <div className='footer-contact-container w-[60%] flex justify-between pt-[60px]'>
            <span>
                <p className='text-[grey] font-[200]'>Email address:</p>
                <a className='text-[--primary] font-[300]' href="mailto:alirashiddev@gmail.com">alirashiddev@gmail.com</a>
            </span>
            <span>
                <p className='text-[grey] font-[200]'>Phone number:</p>
                <p className='text-[--primary] font-[300]'>+923267751511</p>
            </span>
            <span>
                <p className='text-[grey] font-[200]'>Social:</p>
                <a className='text-[--primary] font-[300]' href="">Instagram,</a>
                <a className='text-[--primary] font-[300]' href=""> Linkedin</a>
            </span>
        </div>
    </div>
    <Eyes/>
    <div className="footer-lower-section -h-[350px] bg-[--primary] mt-[60px] flex justify-center items-center overflow-hidden">
    <p className='text-[17vw] font-[700] text-[--secondry-text]'>
        <span className='footer-logo inline-block'>A</span>
        <span className='footer-logo inline-block'>L</span>
        <span className='footer-logo inline-block'>I</span>
        <span className='footer-logo '> </span>
        <span className='footer-logo inline-block'>R</span>
        <span className='footer-logo inline-block'>A</span>
        <span className='footer-logo inline-block'>S</span>
        <span className='footer-logo inline-block'>H</span>
        <span className='footer-logo inline-block'>I</span>
        <span className='footer-logo inline-block'>D</span>
    </p>
    </div>

    </div>
    </>
  );
}

export default Footer;
