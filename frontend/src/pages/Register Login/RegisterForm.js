import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { signUpData } from "../../data/loginData";
import IconGoolge from '../../assets/svgicon/icons8-google.svg';
import IconFacebook from '../../assets/svgicon/icons8-facebook.svg';
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/authContext";
import { BASE_URL } from "../../utils/config";

function RegisterForm() {
    const { subtitle, userName, password, email, notes, buttonLogin, security } = signUpData

    const [show, setShow] = useState(false)

    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
        e.preventDefault()

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!res.ok) {
                const errorData = await res.json(); // Phân tích dữ liệu lỗi từ response
                throw new Error(errorData.message); // Ném lỗi với thông điệp lỗi từ server
            }

            // const result = await res.json();

            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login');
        } catch (err) {
            console.error(err.message); // Log thông điệp lỗi từ server ra console
        }

        // console.log(credentials)
    }

    return <div className="flex w-full  relative bg-white">
        <div>
            <Link to='/signin' className="absolute top-10 left-10">Back to login</Link>
        </div>
        <div className="signin-form w-[524px] my-16 px-12 py-14 mx-auto bg-white rounded-lg border border-gray-200 ">
            <div className="mb-10">
                <h1 className="text-5xl text-primary  font-logoTitle" id="typing-animation">Sign Up</h1>
            </div>
            <form action="" className="space-y-6 md:space-y-7" onSubmit={handleClick}>
                <div className="flex flex-col gap-y-7">
                    <div className="">
                        <div className="flex flex-row items-center justify-between  mb-3"><label className="block  font-medium text-gray-900 " htmlFor="">{userName.name}</label>
                            <div className="flex items-center text-[13px] gap-x-2">
                                <p >{subtitle}</p>
                                <Link className="text-[13px]  text-primary font-medium" to="/signin">Sign in</Link>
                            </div>
                        </div>
                        <input className="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus hover:bg-slate-200:border-primary-600 block w-full p-2.5"
                            name="username"
                            type="text"
                            placeholder={userName.placeholder}
                            id="username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center justify-between mb-3" >
                            <label for="email" class="block  font-medium text-gray-900 ">{email.name}</label>

                        </div>
                        <input type='text' name="email"
                            id="email"
                            onChange={handleChange}
                            placeholder={email.placeholder} class="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center justify-between mb-3" >
                            <label for="password" class="block  font-medium text-gray-900 ">{password.name}</label>
                            <span onClick={() => setShow(!show)} className="text-[13px]">{show ? <FontAwesomeIcon icon={faEyeSlash} className="mr-1" /> : <FontAwesomeIcon icon={faEye} className="mr-1" />}{show ? "Hiden" : "Show"}
                            </span>

                        </div>
                        <input type={`${show ? 'text' : 'password'}`}
                            id="password"
                            onChange={handleChange}
                            name="password" placeholder={password.placeholder} class="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {notes.map((note, index) => (
                        <li className="list-disc list-inside" key={index}><span>{note}</span></li>
                    ))}
                </div>

                <div className="button-login text-center ">
                    <button className="btnLogin border hover:bg-[#03ecbe] text-white bg-primary transition  transform hover:scale-105 ]" onClick={handleClick}>{buttonLogin}</button>
                </div>
                <div className="flex flex-row justify-between items-center h-6">
                    <hr className="w-[50%]"></hr>
                    <p className="m-5 text-gray-400">or</p>
                    <hr className="w-[50%]"></hr>

                </div>
                <div className="flex flex-col justify-center w-full gap-y-3 xl:flex-col items-center xl:gap-x-4">

                    <button className="text-center border border-gray-300   w-full py-3 px-3 rounded-full hover:bg-slate-200 flex justify-center items-center"><img src={IconGoolge} className="w-6 mx-2" alt="" /><p className="text-[13px]"> Sign in with Google</p> </button>

                    <button className="text-center border border-gray-300 w-full py-3 px-3 rounded-full hover:bg-slate-200 flex justify-center items-center"><img src={IconFacebook} className="w-6 mx-2" alt="" /><p className="text-[13px]"> Sign in with Facebook</p> </button>
                </div>
                <div className="text-center">
                    <span className="text-xs">{security}</span>
                </div>

            </form >
        </div >
    </div>;
}

export default RegisterForm;
