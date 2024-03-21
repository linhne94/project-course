import React from "react";
import { product } from "../../../../data/data";
import { useNavigate } from "react-router-dom";
import HtmlImg from '../../../../assets/images/Product/html-css.jpg'
function CoursePro({ courseProData }) {
    const { titlePro, subtitlePro, coursePro } = product

    // const { courseProData } = props

    console.log(courseProData)
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/course/${id}`)
    }

    return <div className="flex flex-col ">
        <div className="text-center uppercase my-7">
            <h1 className=" title text-primary">
                {titlePro}
            </h1>
            <p className="font-medium text-[14px] lg:text-base ">{subtitlePro}</p>
        </div>

        <div className="container mt-4">
            <div className="grid justify-items-center grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-3 ">

                {/* data Fetch from DB */}
                {
                    courseProData && courseProData.map((data, index) => {
                        return <div
                            onClick={() => handleClick(data._id)}
                            key={index} className="cursor-pointer flex flex-col border fea-item border-gray-300 rounded-2xl w-[90%] course-item hover:shadow-lg">
                            <div className="rounded-t-lg ">
                                <img class="object-cover rounded-t-lg w-full h-[200px]" src={data.imageUrl} alt="" />
                            </div>
                            <div className="m-5">
                                <h1 className="text-primary text-lg font-semibold">{data.title}</h1>
                                <p className="text-gray-500 text-[14px]">{data.title}</p>
                                <div className="mt-2">
                                    <div className="text-[#f05f4d]">{data.price}đ</div>
                                    <div className='text-[15px] text-grey line-through'> 500.000đ</div>
                                </div>
                            </div>
                        </div>
                    })}
            </div>
        </div>
    </div>
}
export default CoursePro;
