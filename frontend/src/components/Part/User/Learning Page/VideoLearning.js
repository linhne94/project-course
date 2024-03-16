import React from "react";
import { contentLearning } from "../../../../data/learningData";

function VideoLearning() {
    const { title, content, date, subcontent, advertising, social } = contentLearning
    return <div className="w-[78%] overflow-y-auto overflow-x-hidden h-[100vh] pb-36">
        <div className="h-[100%]" >
            <div className="px-28 bg-black h-[90%] mt-[53px] ">
                <iframe width="100%"
                    height='99%'
                    title="Embedded Content" src="https://www.youtube.com/embed/1Kyxdik3q0w" ></iframe>
            </div>
            <div className="container mx-12">
                <div className="my-12">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <p className="text-sm mt-5">Updated {date}</p>
                </div>
                <div className="my-14 flex flex-col gap-y-3">
                    <h3>{content}</h3>
                    <a className="text-primary underline  " href="https://fullstack.edu.vn/blog/huong-dan-cai-dat-page-ruler-redux-dam-bao-thanh-cong-100.html">https://fullstack.edu.vn/blog/huong-dan-cai-dat-page-ruler-redux-dam-bao-thanh-cong-100.html</a>
                    <p>{subcontent}</p>
                </div>
                <hr class="border-t border-gray-300 my-12 " />
                <div className="space-y-5 pb-24">
                    <h1>{advertising}</h1>
                    <ul>
                        {social.map((social, index) => {
                            return <li key={index} className="mb-2">
                                {social.name}
                                <a className="text-primary underline" href={social.link}>{social.link}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}

export default VideoLearning;
