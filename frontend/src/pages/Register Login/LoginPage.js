import React, { useEffect, useState } from "react";
import ImgLogin from '../../assets/images/logo_noBg.png'
import './login.css'
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
function LoginPage() {

  const [displayText, setDisplayText] = useState('');
  const name = "\"Explore the World of Knowledge with Brainity - Your Premier Platform for Personal Growth! 🚀\"";

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < name.length) {
          i++;
          setDisplayText(prevText => prevText + name.charAt(i - 1));
        } else {
          clearInterval(typingEffect);
        }
      }, 100);

      return () => clearInterval(typingEffect);
    }, 900); // Chờ 3 giây trước khi bắt đầu hiệu ứng ghi ra từng chữ

    return () => clearTimeout(timer); // Xóa timer nếu component unmount
  }, [name]);

  return <div className="w-full m-auto bg-white relative">
    <div className="container-login flex flex-row">
      <div className=" relative lg:flex justify-center hidden items-center flex-1">
        {/* <img className="w-[100%] blur-[10px]" src={ImgLogin} alt="" /> */}
        <div className="image-container mb-[56px] w-[548px] text-[#00457c]">
          <img src={ImgLogin} className="w-[16%]" alt="" />
          <p className="text-2xl font-medium min-h-8">{displayText}</p>
          <h1 className="title mt-3 font-logoTitle">- Brainity</h1>
        </div>
      </div>
      <div className=" flex flex-1 flex-col items-center justify-center ">
        <LoginForm />
      </div>
    </div>
    <div className="absolute top-6 left-10" >
      <Link className="flex flex-row items-center" to='/' ><img src={ImgLogin} className="w-[3%]" alt="" /><span className="font-semibold text-[#00457c] font-logoTitle ">Brainity</span></Link>
    </div>
  </div>;
}

export default LoginPage;
