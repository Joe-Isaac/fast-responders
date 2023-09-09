import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'
import { AppstoreOutlined, ClockCircleOutlined, EditOutlined, PaperClipOutlined, PlusOutlined } from '@ant-design/icons/lib/icons'
import { Button, Card } from 'antd'
import Map from '../components/Map'
import Logo from '../assets/logo.jpg'
import moment from 'moment'

function DriverProfile() {
  return (
    // Global container
    <div className='flex flex-col items-center justify-center'>

    {/* Header section */}
    <div className='flex items-center w-full border-b-2'>
        <div className='flex w-1/2 items-start m-3 py-1 px-2'>
      <Button className='flex items-center font-bold'>
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
    <div className='w-3/4 rounded-md shadow-md flex items-center px-4 py-4 mt-6 justify-between'>
      {/* Avatar */}
      <div className='flex justify-evenly items-center'>
        <div>
        <img 
        src='https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_1280.jpg'
        alt='profile picture'
        className='rounded-full h-12 w-12'/>
        </div>

        <div className='mx-4'>
          <div className='font-extrabold font-mono text-lg'>Joseph Gathekia</div>
          <div className='text-gray-400 font-semibold'>Driver</div>
        </div>
      </div>

      {/* Employment type */}
      <div className="flex justify-center">
        <div className='border-r-2 mx-4 px-2'>
          <div className='text-gray-400 font-semibold my-1'>Employment Type</div>
          <div className='font-mono font-bold'>Full time</div>
        </div>
        <div>
          <div className='text-gray-400 font-semibold my-1'>Has account?</div>
          <div className='bg-[#52c41a] text-white font-mono text-lg font-extrabold flex justify-center rounded-md'>Yes</div>
        </div>
      </div>
    </div>


    {/* Small cut off section */}
    <div className='w-3/4 mt-4 flex'>
      <div className='mx-3 flex justify-around items-center text-blue-500 bg-blue-50 p-1'>
        <AppstoreOutlined />
        <div className='font-mono font-semibold mx-2 text-sm'>Overview</div>
      </div>

      <div className='mx-3 flex justify-around items-center p-1'>
        <ClockCircleOutlined/>
        <div className='font-mono font-semibold mx-2 text-sm'>Working hours</div>
      </div>

      <div className='mx-3 flex justify-around items-center p-1'>
        <PaperClipOutlined/>
        <div className='font-mono font-semibold mx-2 text-sm'>Documents</div>
      </div>
      
    </div>

    {/* Employment details section */}
    <div className='w-3/4 mt-4 flex border-x-2 border-b-2 flex-col justify-center items-center'>
      {/* Header */}
      <div className='font-semibold font-sans text-sm m-2 w-11/12'>Employment details</div>

      <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} className='w-11/12 my-2'>
        <div className='w-full border-b-2 font-semibold font-mono my-2 py-2 px-4 flex justify-between items-center'>
          <div>Basic</div>
          <div className='text-blue-500'><EditOutlined/></div>
        </div>
        <div className='flex'>
          <div className='flex flex-col w-1/4'>
            <div className='font-semibold text-gray-500'>Employment status</div>
            <div className='font-semibold text-gray-500'>Department</div>
            <div className='font-semibold text-gray-500'>Start Date</div>

            <div className='w-full font-bold font-mono flex items-center mt-4 text-blue-500'>
            <PlusOutlined/>
            <div className='mx-2'>Add fields</div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='font-mono bg-[#52c41a] text-white text-base font-extrabold px-4 rounded-md'>Active</div>
            <div className='font-mono font-semibold'>Medical</div>
            <div className='font-mono font-semibold'>{moment("2022-01-23").format("YYYY-MM-DD")}</div>
          </div>
        </div>
      </Card>

      <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} className='w-11/12 my-2'>
      <div className='w-full border-b-2 font-semibold font-mono my-2 py-2 px-4 flex justify-between items-center'>
          <div>More details</div>
          <div className='text-blue-500'><EditOutlined/></div>
        </div>
      <div className='flex'>
          <div className='flex flex-col w-1/4'>
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
            <div className='font-mono bg-[#f5222d] text-base font-extrabold px-4 text-white rounded-md'>No</div>
            <div className='font-semibold font-mono'>Nairobi</div>
          </div>
        </div>
      </Card>

      <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}} className='w-11/12 my-2'>
      <div className='w-full border-b-2 font-semibold font-mono my-2 py-2 px-4 flex justify-between items-center'>
          <div>Last known location</div>
        </div>
      <div>
          <Map/>
      </div>
      </Card>


    </div>

    {/* Controls section, i.e., Activate tracking */}
    </div>
  )
}

export default DriverProfile