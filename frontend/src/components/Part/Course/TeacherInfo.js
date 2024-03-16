import React from 'react'
import image from '../../../assets/images/Avatar/0_Mikel-Arteta.jpg'
import { GiAchievement } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
const TeacherInfo = () => {
    const info = [
        {icon : <CiStar/> , content : "4,8 ratings from learners"},
        {icon : <GiAchievement/>, content : "A lot of certifications"},
        {icon : <FaPlayCircle/>, content : "1 video published"}

    ]
  return (
    <div className='w-1/2 mx-8'>
        <h1 className='text-4xl font-bold my-5'>Teacher Information</h1>
        <h1 className='text-2xl font-semibold my-3'>Mikel Arteta</h1>
        <p className='italic my-3'>Head Coach at Arsenal and potentially becoming the new Championship</p>
        <div className='flex'>
            <img src={image} alt='' className='w-1/4 h-1/3 rounded-full'></img>
            <div className='flex flex-col justify-center mx-3'>
    {info.map((info,index) =>{
        return(
            <div key={index} className='flex flex-col gap-y-4'>
                <div className='flex gap-x-2 items-center'>
                    {info.icon}
                    <div>{info.content}</div>
                </div>
            </div>
        )
    })}
            </div>
        </div>
        
        </div>
  )
}

export default TeacherInfo