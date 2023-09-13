import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Card, Col, Row } from "antd";
import car from "../assets/car.jpg";
import "../App.css";
import Map from "../components/Map";
import LandingNavBar from "../components/LandingNavBar";
import { FaAmbulance, FaBeer, FaRegHospital } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
import Zones from "../components/Zones";
import Footer from "../components/Footer";

function Home() {
  const [text, count] = useTypewriter({
    words: [
      "We do timely rescue services",
      "And also do medical equipment supplies",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const layout = {
    xs: { span: 24 },
    sm: { span: 4 },
    lg: { span: 3 },
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
      <div className="h-full">
        <LandingNavBar />

        <div className="flex">
          <div className="w-3/4 pt-10 pb-36 flex items-center justify-center bg-blue-100">
            <div className="">
              <p className="font-bold text-4xl font-sans text-black">
                Timely Rescue Services
              </p>
              <div className="flex">
                <div className="font-bold text-4xl font-sans text-black">
                  & Medical
                </div>
                <div className="text-blue-500 font-bold text-4xl font-sans ml-2">
                  Equipment Supplies.
                </div>
              </div>

              <br />
              <br />
              <div className="flex items-center space-x-10">
                <div className="bg-blue-400 text-black font-bold font-sans text-lg py-2 px-6 rounded-xl hover:bg-white hover:text-black cursor-pointer shadow-md">
                  Book Ambulance
                </div>
                <div className="bg-red-700 text-white font-bold font-sans text-lg py-2 px-6 rounded-xl hover:bg-black hover:text-white cursor-pointer shadow-md">
                  <a
                    href="tel:0701297753"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Call Us Now
                  </a>
                </div>
              </div>

              <div className="mt-12 flex text-xl font-sans font-semibold items-center">
                Or call our hotline number{" "}
                <div className="text-red-700 font-sans text-3xl font-bold ml-4">
                  0701 297753
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 bg-blue-400">
            
          </div>
        </div>
        {/* Key services */}
        <div
          className="flex items-center justify-evenly"
          style={{
            position: "relative",
            top: -80,
          }}
        >
          <div className="w-1/4 bg-white shadow-md font-sans rounded-xl flex flex-col items-center justify-center p-8">
            <FaAmbulance size={50} className="text-red-700" />
            <div className="font-semibold text-lg my-2">Emergency Response</div>
            <div className="text-sm text-gray-600">
              Rapid, life-saving medical assistance, often dispatched in
              critical situations to provide immediate care and transport to a
              healthcare facility.
            </div>
          </div>
          <div className="w-1/4 bg-blue-400 shadow-lg font-sans rounded-xl flex flex-col items-center justify-center p-8">
            <MdEmojiTransportation size={50} className="text-black" />
            <div className="font-semibold text-black text-lg my-2">
              Hospital Transfer
            </div>
            <div className="text-sm text-black">
              A professional service for safely and efficiently moving patients
              between hospitals, ensuring their well-being during the journey.
            </div>
          </div>
          <div className="w-1/4 bg-white shadow-md font-sans rounded-xl flex flex-col items-center justify-center p-8">
            <FaRegHospital size={50} className="text-red-700" />
            <div className="font-semibold text-lg my-2">Hospital Discharge</div>
            <div className="text-sm text-gray-600">
              A carefully coordinated process that allows patients to leave the
              hospital with the necessary follow-up care and resources for a
              smooth recovery at home.
            </div>
          </div>
        </div>

        
        {/* Other services */}
        <div className="font-sans font-bold text-3xl flex justify-center">Other Medical Services</div>

        <div className="flex items-center justify-evenly font-sans my-4">
          <div className="bg-white w-1/4 font-sans rounded-xl flex flex-col items-center justify-center p-8">
            {/* <FaAmbulance size={50} className="text-red-700" /> */}
            <div className="font-semibold text-lg my-2">Events Covering</div>
            <div className="text-sm text-gray-600">
              On-site medical support and first aid services for public or
              private events to ensure the well-being of attendees.
            </div>
          </div>

          <div className="bg-white w-1/4 font-sans rounded-xl flex flex-col items-center justify-center p-8">
            {/* <FaAmbulance size={50} className="text-red-700" /> */}
            <div className="font-semibold text-lg my-2">Evacuation</div>
            <div className="text-sm text-gray-600">
                The organized and secure relocation of individuals, particularly
                during disasters, emergencies, or hazardous situations.
            </div>
          </div>


          <div className="bg-white w-1/4 font-sans rounded-xl flex flex-col items-center justify-center p-8">
            {/* <FaAmbulance size={50} className="text-red-700" /> */}
            <div className="font-semibold text-lg my-2">Medical Equipment Supply</div>
            <div className="text-sm text-gray-600">
                Reliable delivery of essential medical equipment and supplies,
                ensuring healthcare facilities have the tools needed to provide
                quality care.
            </div>
          </div>         
        </div>

        <div className="flex flex-col justify-center items-center font-sans my-4">
         <div className="font-bold text-3xl ">Areas We Serve</div>
         <br/>
         <div className="w-1/3 font-sans text-gray-600">We typically serve the areas listed below, however please give us a call to confirm.</div>
        <div className="w-full my-6 flex items-center justify-evenly">
        <div className="font-sans text-gray-600">
          <ul style={{listStyle: 'square'}}>
            <li>Kasarani, Nairobi</li>
            <li>Muthaiga, Nairobi</li>
            <li>Karen, Nairobi, Kenya</li>
            <li>Thika, Central Province</li>
            <li>Kiambu, Central Province</li>
            <li>Murang&apos;a, Central Province</li>
            <li>Machakos, Eastern Province</li>
            <li>Athi River, Eastern Province</li>
          </ul>
        </div>
          <div className="w-1/2">
          <Zones/>
          </div>
        </div>
        </div>


        {/* Footer */}
        <div className="flex items-center justify-center">
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;