import React, { useState } from 'react';
import logo from '../assets/logo.jpg'
import { SocialIcon } from 'react-social-icons';
import { FaPhone } from 'react-icons/fa';
import { Col, Row } from 'antd';

function Footer() {
  const [emailIcon, setEmailIcon] = useState(false);
  const layout = {
    xs:{ span : 18},
    sm:{ span : 6},
    md:{ span : 6},
    lg:{ span : 6},
  }

  const masterLayout = {
    xs:{ span : 24},
    md:{ span : 6},
  }

  return (
    <Row className='w-full bg-[#000] text-white flex justify-between items-center'>
        <Col {...masterLayout} className='flex md:flex-col items-center md:items-start justify-center'>
            <div className='md:w-full flex items-center justify-start my-2'>
              <img src={logo} alt="img" className='w-28 md:w-40 my-4 rounded-full object-contain'/>
            </div>
          
        </Col>
        
        <Col xs={{span:24}} md={{span:18}} 
        className='flex md:flex-row flex-col items-center justify-center'>
        <Col span={14} className='flex flex-col justify-center items-start md:items-center'>
            <div className='my-2 flex items-center justify-center hover:text-white cursor-pointer space-x-2'>
              <div className='font-sans text-lg flex md:flex-row flex-col'>Our hotline number <a href='tel:0701 297753' className='text-2xl md:ml-2 text-blue-500 font-bold'>0701 297753</a></div>
            </div>
          
            <div className='my-2 flex flex-col items-center justify-center'>
              <p className=' hover:text-white font-sans'>
              Mshale lane, off Muranga Road, Nairobi, Kenya.
              </p>
              <p className=' hover:text-white font-sans'>
              fastrespondershealthcare@gmail.com
              </p>
            </div>
        </Col>

        <Col span={8}>
        <div className='my-2 w-full md:w-1/2 flex flex-col'>
              <div className='flex justify-between md:justify-evenly items-center'>
              <SocialIcon className='h-3 w-3 my-4' fgColor='white' url='https://www.facebook.com/FastRespondersKenya/' target="_blank"/>
              <div className='pl-4'>Follow Us</div>
              </div>
              <div className='flex md:justify-evenly items-center'>
              <SocialIcon
              className='h-3 w-3 my-4' bgColor='white' fgColor='black'
              url="mailto:fastrespondershealthcare@gmail.com" target="_blank"/>
              <div className='pl-4'>Email Us</div>
              </div>
              
        </div>
        </Col>
        
        </Col>

        
        {/* Third Col */}
    </Row>
  )
}

export default Footer