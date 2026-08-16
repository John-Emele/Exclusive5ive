import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { GoGoal } from "react-icons/go";
import bg_1 from "../../Images/bg_1.jpg";
import email from "../../Images/mail.png";
import instagram from "../../Images/instagram.png";
import tiktok from "../../Images/tiktok.png";
// import email from "../../Images/twitter.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";






function Body() {
    const [user_name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="w-[95%] mx-auto  mb-10">

            <div className="lg:flex lg:h-dvh  ">

                <div className="lg:w-[55%] mx-auto">
                    <h1 className="text-3xl text-red-700 font-medium font-black uppercase">Get in touch</h1>
                    <p className="my-3 font-bold font-black text-4xl lg:text-5xl uppercase ">we'd love to  <br/> hear from you 
                    </p>
                    <p className="text-gray-600 font-medium my-5 text-xl w-[95%] lg:text-xl"><span className="text-red-700">Excluxive 5ive</span> Have a question or feedback? 
                    <br />
                    We are here to help.
                    </p>


                    <div className="flex items-center mb-5 gap-3 ">
                        <MdOutlineEmail className="text-red-600 text-5xl lg:text-[30px]" />
                        <div>
                            <p className="font-bold text-black text-2xl lg:text-lg">Email</p>
                            <p className="font-medium text-gray-600 text-lg lg:text-sm">emeleikechukwu36@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  gap-3">
                        <FaPhoneAlt className="text-red-600 text-5xl lg:text-[30px]" />
                        <div>
                            <p className="font-bold text-black text-2xl lg:text-lg">Phone</p>
                            <p className="font-medium text-gray-600 text-lg lg:text-sm">+23410083459</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5  gap-3">
                        <GrLocation className="text-red-600 text-5xl lg:text-[30px]" />
                        <div>
                            <p className="font-bold text-black text-2xl lg:text-lg">Address</p>
                            <p className="font-medium text-gray-600 text-lg lg:text-sm">SunnyVale Estate, Abuja.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 px-2">
                        <img src={instagram} alt=""  className="w-8 h-8"/>
                        <img src={tiktok} alt=""  className="w-8 h-8"/>
                    </div>
                </div>

                <div className="lg:w-[45%] mt-15 lg:mt-10 mx-auto rounded-[10px] h-120 border border-gray-200 p-5  ">
                    <div className="form-group">
                        <input type="text" className="border border-gray-200 w-full h-10 rounded-[5px] bg-whitetext-gray-red-600 "  value={user_name} 
                        onChange={(e) => {
                          setUserNAME(e.target.value)
                        }}
                        required
                        />
                        <label  className="text-sm bg-gray-50 text-gray-500 uppercase" >Your Name</label>
                        {
                            error && user_name === "" ? 
                            <p className="text-xs text-red-700 font-medium">Field must not be empty</p> :
                            null
                        }
                    </div>
                    <div className="form-group">
                        <input type="text" className="border border-gray-200 w-full h-10 rounded-[5px] bg-whitetext-gray-red-600 "  value={email} 
                        onChange={(e) => {
                          setEmail(e.target)
                        }}
                        required
                        />
                        <label htmlFor="" className="text-sm bg-gray-50 text-gray-500 uppercase">Email Address</label>
                            {
                            error && email === "" ? 
                            <p className="text-xs text-red-700 font-medium">Field must not be empty</p> :
                            null
                        }
                    </div>
                    <div className="form-group">
                        <input type="text" className="border border-gray-200 w-full h-10 rounded-[5px] bg-whitetext-gray-red-600 "  value={subject} 
                        onChange={(e) => {
                          setSubject(e.target)
                        }}
                        required
                        />
                        <label htmlFor="" className="text-sm bg-gray-50 text-gray-500 uppercase">Subject</label>
                            {
                            error && subject === "" ? 
                            <p className="text-xs text-red-700 font-medium">Field must not be empty</p> :
                            null
                        }
                    </div>
                    <div className="form-group">
                        <textarea className="border border-gray-200 w-full h-30 rounded-[5px] bg-whitetext-gray-red-600 "  value={message} 
                        onChange={(e) => {
                          setMessage(e.target)
                        }}
                        required
                        />
                        <label htmlFor="" className="text-sm bg-gray-50 text-gray-500 uppercase">Message</label>
                            {
                            error && message === "" ? 
                            <p className="text-xs text-red-700 font-medium">Field must not be empty</p> :
                            null
                        }
                    </div>

                    <div className="w-[80%] mx-auto mt-10">
                        <button className="font-bold text-white uppercase hover:bg-red-600  bg-red-700 h-10 w-full">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;