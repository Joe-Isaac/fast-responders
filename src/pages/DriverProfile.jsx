import { ArrowLeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { AppstoreOutlined, ClockCircleOutlined, EditOutlined, PaperClipOutlined, PlusOutlined } from '@ant-design/icons/lib/icons'
import { Button, Card, Modal, Switch } from 'antd'
import Map from '../components/Map'
import Logo from '../assets/logo.jpg'
import moment from 'moment'
import { authentication } from '../Firebase/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function DriverProfile({auth}) {
  const [switchColor, setSwitchColor] = useState('gray');
  const [location, setLocation] = useState();
  const [authenticated, setAuthenticated] = useState();
  const navigate = useNavigate();
  // const [coordinates, setCoordinates] = useState([-1.286389, 36.817223]);

  useEffect(()=>{
    // Fetch the driver's details and use the email addres.
    console.log("This is auth data ", auth)
  }, [])

  function handleGeoTracking(data){
    // if data is true activation is opened.
    let watchId;
    if(data){
      // Start watching user's location
      setSwitchColor('#1677ff');
      // Check if geolocation is supported by the browser
  if ('geolocation' in navigator) {
    // Start watching the user's location and call the appropriate callback functions
    watchId = navigator.geolocation.watchPosition(
      handleLocationUpdate, // Success callback
      errorMessage   // Error callback
    );

    // Log the watchId (you will need this to clear the watch later)
  } 
  else {
    console.error('Geolocation is not supported by this browser.');
  }
    }
    else{
      // Geo location tracking deactivated
      setSwitchColor('gray');
      navigator.geolocation.clearWatch(watchId);
    }
  }


  useEffect(()=>{
    const authCheck = onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in.
        setAuthenticated(user);
        // You can perform actions for authenticated users here.
      } 
    })

    if(auth){
      console.log("");
    }
    // The user wil never be in this page without having an auth token,
    //  but just in case they dont redirect them again.
    // If the user does not have the token from the url
    // check the auth state
    else{
      authCheck();
    }
  }, [])



  function handleLocationUpdate(location){
    setLocation(
      [location?.coords?.latitude, location.coords.longitude]
    )
  }

  // const successMessage = (message) => {
  //   Modal.success({
  //     title: (
  //       <div>
  //         {' '}
  //         <p style={{color: 'green'}}> Success Message</p>{' '}
  //       </div>
  //     ),
  //     content: (
  //       <div>
  //         {' '}
  //         <p style={{fontWeight: 'bold', fontSize: 15}}> Successfully signed in</p>{' '}
  //       </div>
  //     ),
  //     closable: true,
  //     okButtonProps: {className:'bg-blue-500'},
  //     // footer: true
  //   });
  // };

  const errorMessage = (errorMsg) => {
    Modal.error({
      title: (
        <div>
          <p style={{color: '#f5222d'}}> Error Message</p>
        </div>
      ),
      content: (
        <div>
          <p style={{fontWeight: 'bold', fontSize: 15}}>{errorMsg}</p>
        </div>
      ),
      closable: true,
      okButtonProps: {style:{backgroundColor: 'red'}},
      // footer: false
    });
  };

  async function logout(){
    try{
      await signOut(authentication);
    }
    catch(err){
      errorMessage(err);
    }

  }


  return (
    // Global container
    <div className='flex flex-col items-center justify-center'>

    {/* Header section */}
    <div className='flex items-center w-full border-b-2'>
        <div className='flex md:w-1/2 w-full items-start m-3 py-1 px-2'>
      <Button className='flex items-center font-bold' onClick={logout}>
        <ArrowLeftOutlined/>
        <div className='mx-2 text-sm'>
          Sign out
        </div>
      </Button>
        </div>

        <div className='w-1/2'>
          <img src={Logo} alt='logo' className='h-20 w-20 object-cover rounded-full'/>
        </div>

    </div>

    {/* Profile section */}
    <div className='w-11/12 md:w-3/4 rounded-md shadow-md flex md:flex-row flex-col items-center px-4 py-4 mt-6 justify-between'>
      {/* Avatar */}
      <div className='flex justify-evenly items-center mb-4'>
        <div>
        <img 
        src='https://img.freepik.com/premium-vector/3d-realistic-person-people-vector-illustration_156780-130.jpg?w=740'
        alt='profile picture'
        className='rounded-full md:h-12 md:w-12 h-16 w-16'/>
        </div>

        <div className='mx-4'>
          <div className='font-extrabold font-mono text-base md:text-lg'>{auth?.email}</div>
          <div className='text-gray-400 font-normal'>{auth?.role}</div>
        </div>
      </div>

      {/* Employment type */}
      <div className="flex justify-center">
        <div className='border-r-2 mx-4 px-2'>
          <div className='text-gray-400 font-normal my-1 md:text-base text-sm'>Employment Type</div>
          <div className='font-mono font-bold md:text-sm text-xs'>Full time</div>
        </div>
        <div>
          <div className='text-gray-400 font-normal my-1 md:text-base text-sm'>Has account?</div>
          <div className='bg-[#52c41a] text-white font-mono md:text-sm text-xs font-extrabold flex justify-center rounded-md'>Yes</div>
        </div>
      </div>
    </div>


    {/* Small cut off section */}
    <div className='md:w-3/4 w-11/12 mt-4 flex'>
      <div className='mx-3 flex justify-around items-center text-blue-500 bg-blue-50 p-1'>
        <AppstoreOutlined />
        <div className='font-mono font-semibold mx-2 md:text-sm text-xs'>Overview</div>
      </div>

      <div className='mx-3 flex justify-around items-center p-1'>
        <ClockCircleOutlined/>
        <div className='font-mono font-semibold mx-2 md:text-sm text-xs'>Working hours</div>
      </div>

      <div className='mx-3 flex justify-around items-center p-1'>
        <PaperClipOutlined/>
        <div className='font-mono font-semibold mx-2 md:text-sm text-xs'>Documents</div>
      </div>
      
    </div>

    {/* Employment details section */}
    <div className='md:w-3/4 w-11/12 mt-4 flex border-x-2 border-b-2 flex-col justify-center items-center'>
      {/* Header */}
      <div className='font-semibold font-sans text-sm m-2 w-11/12'>Employment details</div>

      <div className='flex w-11/12 md:flex-row flex-col justify-between'>
      <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}}
      className='md:w-5/12 my-2'>
        <div className='w-full border-b-2 font-semibold font-mono my-2 py-2 px-4 flex justify-between items-center'>
          <div>Basic</div>
          <div className='text-blue-500'><EditOutlined/></div>
        </div>
        <div className='flex justify-between px-6'>
          <div className='flex flex-col '>
            <div className='font-semibold text-gray-500'>Employment status</div>
            <div className='font-semibold text-gray-500'>Department</div>
            <div className='font-semibold text-gray-500'>Start Date</div>

            <div className='font-bold font-mono flex items-center mt-4 text-blue-500'>
            <PlusOutlined/>
            <div className='mx-2'>Add fields</div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='font-mono bg-[#52c41a] text-white text-sm font-extrabold px-4 rounded-md'>Active</div>
            <div className='font-mono font-semibold'>Medical</div>
            <div className='font-mono font-semibold'>{moment("2022-01-23").format("YYYY-MM-DD")}</div>
          </div>
        </div>
      </Card>

      <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} className='md:w-5/12 my-2'>
      <div className='w-full border-b-2 font-semibold font-mono my-2 py-2 px-4 flex justify-between items-center'>
          <div>More details</div>
          <div className='text-blue-500'><EditOutlined/></div>
        </div>
      <div className='flex justify-between px-6'>
          <div className='flex flex-col'>
            <div className='font-semibold text-gray-500'>Job Type</div>
            <div className='font-semibold text-gray-500'>Job title</div>
            <div className='font-semibold text-gray-500'>Overtime</div>
            <div className='font-semibold text-gray-500'>Base Locale</div>

            <div className='w-full font-bold font-mono flex items-center mt-4 text-blue-500'>
            <PlusOutlined/>
            <div className='mx-2'>Add fields</div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='font-semibold font-mono'>Full time</div>
            <div className='font-semibold font-mono'>Medical</div>
            <div className='font-mono bg-[#f5222d] text-sm font-extrabold px-4 text-white rounded-md'>No</div>
            <div className='font-semibold font-mono'>Nairobi</div>
          </div>
        </div>
      </Card>
      </div> 

      <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} className='w-11/12 my-2'>
      <div className='w-full border-b-2 font-semibold font-mono my-2 py-2 px-4 flex items-center'>
          <div>Last known location</div>
          <div>
            <Switch style={{backgroundColor: switchColor, marginLeft: 20}} checkedChildren="Geo tracking activated" unCheckedChildren="Geo tracking deactivated" onChange={handleGeoTracking}/>
          </div>
        </div>
      <div>
          <Map location={location}/>
      </div>
      </Card>


    </div>

    {/* Controls section, i.e., Activate tracking */}
    </div>
  )
}

export default DriverProfile