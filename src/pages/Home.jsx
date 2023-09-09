import React from "react";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Card, Col, Row } from "antd";
import car from "../assets/car.jpg"
import "../App.css"
import Map from "../components/Map";


function Home() {
  const [text, count] = useTypewriter({
    words: [
        "We do timely rescue services",
        "and also do medical equipment supplies",
    ],
    loop: true,
    delaySpeed: 2000,
})

const layout = {
  xs: { span: 24 },
  sm: { span: 11 },
  lg: { span: 7 },
};

  return (
    <div
      className="h-screen"
      // style={{
      //   backgroundImage:
      //     'url("https://cdn.pixabay.com/photo/2018/03/27/18/44/ambulance-3266960_1280.jpg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="h-full 
      
      " >
        <Navbar />

        <div className="lg:my-1 my-12">
        <div className="flex justify-between items-center">
          <div className="w-full">
          <motion.div
        initial={{
            x: -450,

        }}
        animate={{
            x: 0,
        }}

        transition={{
            duration: 2.5,
        }}
         className="font-bold h-32 w-full text-2xl px-4 flex justify-center items-center">
          <span>{text}</span>
          <Cursor cursorColor='white'/>
          </motion.div>

          <motion.div 
          initial={{
            y: 150,
            // opacity: 0,
            // scale: 0.5,

        }}
        animate={{
            y: 0,
            // opacity: 1,
            // scale: 1,
        }}

        transition={{
            duration: 1.5,
        }}          
          className="flex justify-around w-full h-20 items-center my-4">
            <button className="text-white text-lg font-bold font-sans hover:bg-white hover:text-black bg-red-600 py-6 hover:border-2 px-4 rounded-lg">
            Get an ambulance now
            </button>
          </motion.div>
          </div>

          {/* <div className="flex justify-start items-center">
            <div>
            <img className="object-cover h-24" src={car}/>
            </div>
          </div> */}
        </div>

          {/* Why choose us */}
          <div>
          <motion.div 
          initial={{
            x: 350,
        }}
        animate={{
            x: 0,
        }}

        transition={{
            duration: 3.5,
        }}          
         className="flex justify-center z-20 font-bold mt-8 mb-4 text-3xl font-sans">Why choose us</motion.div>

          {/* Services offered */}
            <motion.div 
          initial={{
            y: 350,
        }}
        animate={{
            y: 0,
        }}
        transition={{
            duration: 2.5,
        }} className="w-full">
              <Row gutter={24} className="flex justify-evenly my-4">
                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div>
                      
                    </div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Emergency Response
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Hospital Transfer
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Evacuation
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Hospital Discharge
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Hospital Discharge
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Standby services
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Events/Festival Covering
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>

                <Col {...layout}>
                <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Supply of medical equipment
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card>
                </Col>
                
                <Col {...layout}>
                {/* <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} hoverable className="my-1 border-0">
                  <div>
                    <div></div>
                    <div className="text-red-600 font-bold font-sans text-lg">
                    Evacuation
                    </div>
                  </div>
                  <div>Our vehicles and staff are always ready to deliver emergency services quickly</div>
                </Card> */}
                </Col>
              </Row>
            </motion.div>
          </div>


          {/* Map View */}
          <Map/>

        </div>
      </div>
    </div>
  );
}

export default Home;
