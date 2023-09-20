import React from "react";
import { Card, Col, Row } from "antd";
import car from "../assets/car.jpg";
import "../App.css";
import Map from "../components/Map";
import LandingNavBar from "../components/LandingNavBar";
import { FaAmbulance, FaBeer, FaRegHospital } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
import Zones from "../components/Zones";
import Footer from "../components/Footer";
import counties from "../assets/counties";

function Home() {
  const layout = {
    xs: { span: 18 },
    sm: { span: 18 },
    lg: { span: 6 },
  };

  return (
    <div className="h-screen">
      <div className="h-full">
        <div>
          <Row
            className="w-full"
            style={{
              backgroundImage: `url(${car})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <LandingNavBar />

            <div className="w-full pt-10 pb-36 flex items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <div className="px-6">
                <p className="font-bold text-4xl font-sans text-white">
                  Timely Rescue Services & 
                </p>
                <div className="md:flex">
                  <div className="font-bold text-4xl font-sans text-white">
                    Medical
                  </div>
                  <div className="text-blue-500 font-bold text-4xl font-sans md:ml-2">
                    Equipment Supplies.
                  </div>
                </div>

                <br />
                <br />
                <div className="flex items-center space-x-10">
                  <div className="bg-blue-400 text-black font-bold font-sans md:text-lg py-2 px-6 rounded-xl hover:bg-white hover:text-black cursor-pointer shadow-md">
                    Book Ambulance
                  </div>
                  <div className="bg-red-700 text-white font-bold font-sans md:text-lg py-2 px-6 rounded-xl hover:bg-black hover:text-white cursor-pointer shadow-md">
                    <a
                      href="tel:0701297753"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Call Us Now
                    </a>
                  </div>
                </div>

                <div className="mt-12 flex md:text-xl font-sans font-semibold text-white items-center">
                  Or call our hotline number{" "}
                  <div className="text-red-700 font-sans text-xl md:text-3xl font-bold ml-4">
                    0701 297753
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
        {/* Key services */}
        <Row
          className="flex items-center justify-evenly"
          style={{
            position: "relative",
            top: -80,
          }}
        >
          <Col {...layout} className="w-1/4 mb-6 bg-white shadow-md font-sans rounded-xl flex flex-col items-center justify-center p-8">
            <FaAmbulance size={50} className="text-red-700" />
            <div className="font-semibold text-lg my-2">Emergency Response</div>
            <div className="text-sm text-gray-600">
              Rapid, life-saving medical assistance, often dispatched in
              critical situations to provide immediate care and transport to a
              healthcare facility.
            </div>
          </Col>
          <Col {...layout} className="w-1/4 mb-6 bg-blue-400 shadow-lg font-sans rounded-xl flex flex-col items-center justify-center p-8">
            <MdEmojiTransportation size={50} className="text-black" />
            <div className="font-semibold text-black text-lg my-2">
              Hospital Transfer
            </div>
            <div className="text-sm text-black">
              A professional service for safely and efficiently moving patients
              between hospitals, ensuring their well-being during the journey.
            </div>
          </Col>
          <Col {...layout} className="w-1/4 mb-6 bg-white shadow-md font-sans rounded-xl flex flex-col items-center justify-center p-8">
            <FaRegHospital size={50} className="text-red-700" />
            <div className="font-semibold text-lg my-2">Hospital Discharge</div>
            <div className="text-sm text-gray-600">
              A carefully coordinated process that allows patients to leave the
              hospital with the necessary follow-up care and resources for a
              smooth recovery at home.
            </div>
          </Col>
        </Row>

        {/* Other services */}
        <div className="font-sans font-bold text-3xl flex justify-center">
          Other Medical Services
        </div>

        <Row className="flex items-center justify-evenly font-sans my-4">
          <Col {...layout} className="bg-white w-1/4 font-sans rounded-xl flex flex-col items-center justify-center py-4 md:p-8">
            {/* <FaAmbulance size={50} className="text-red-700" /> */}
            <div className="font-semibold text-lg my-2">Events Covering</div>
            <div className="text-sm text-gray-600">
              On-site medical support and first aid services for public or
              private events to ensure the well-being of attendees.
            </div>
          </Col>

          <Col {...layout} className="bg-white w-1/4 font-sans rounded-xl flex flex-col items-center justify-center py-4 md:p-8">
            {/* <FaAmbulance size={50} className="text-red-700" /> */}
            <div className="font-semibold text-lg my-2">Evacuation</div>
            <div className="text-sm text-gray-600">
              The organized and secure relocation of individuals, particularly
              during disasters, emergencies, or hazardous situations.
            </div>
          </Col>

          <Col {...layout} className="bg-white w-1/4 font-sans rounded-xl flex flex-col items-center justify-center py-4 md:p-8">
            {/* <FaAmbulance size={50} className="text-red-700" /> */}
            <div className="font-semibold text-lg my-2">
              Medical Equipment Supply
            </div>
            <div className="text-sm text-gray-600">
              Reliable delivery of essential medical equipment and supplies,
              ensuring healthcare facilities have the tools needed to provide
              quality care.
            </div>
          </Col>
        </Row>

        <div className="flex flex-col justify-center items-center font-sans my-4">
          <div className="font-bold text-3xl ">Areas We Serve</div>
          <br />
          <div className="md:w-1/3 font-sans text-gray-600">
            Our services are available countrywide.
          </div>
          <div className="w-full px-4 my-6 flex flex-col md:flex-row items-center justify-evenly">
            <div className="font-sans text-gray-600 mb-8">
              <div className="font-sans font-bold text-xl mb-6">
                We&lsquo;re available in all 47 counties
              </div>
              <ul
                style={{ listStyle: "square", height: 350, overflow: "scroll" }}
              >
                {counties.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <Zones />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
