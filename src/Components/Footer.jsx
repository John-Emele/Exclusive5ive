import plane from "../Images/paper-plane.png";
import instagram from "../Images/instagram.png";
import tiktok from "../Images/tiktok.png";
import speaker from "../Images/speaker.png";
import visa from "../Images/visa.png";
import verve from "../Images/verve.png";
import logo from "../Images/logo.png";
import send from "../Images/send.png";

function Footer() {
    return (
        <div className="bg-gray-200 p-5">
            <div className="w-[90%] mx-auto mt-10 bg-black rounded-[999px] py-3 mb-10">
                <div className="w-[80%] mx-auto flex justify-between items-center">
                    <div className="flex gap-3">
                        <img src={plane} alt="" className="w-10 h-10 me-5" />
                        <h1 className="text-center text-white text-2xl mb-1 uppercase font-bold">Sign Up <span
                            className="text-xs lowercase text-gray-300">...and get updates from us</span></h1>
                    </div>
                    <div className="rounded-[20px] h-10 flex w-[50%]">
                        <input type="text"
                            className="w-[90%] rounded-s-[20px] h-full mx-auto bg-white text-black  outline-none font-light text-sm ps-2  placeholder:text-sm placeholder:font-light placeholder:text-black"
                            placeholder="Your Email....." />
                        <button className="w-[10%] mx-auto bg-gray-300 h-full rounded-e-[20px] font-bold text-sm uppercase">
                            <img src={send} alt="" className="h-5 w-5 ms-2" /></button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-[80%] mx-auto mb-10">
                <div className="flex gap-10">
                    <div>
                        <h1 className="font-bold text-sm">About</h1>
                        <p className="text-xs font-light">About Us</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-sm">Extra</h1>
                        <p className="text-xs font-light uppercase">FAQ</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-5 mb-5">
                        <img src={instagram} alt="" className="w-7 h-7" />
                        <img src={tiktok} alt="" className="w-7 h-7" />
                        {/* <img src="images/mail.png" alt="" class="w-7 h-7" /> */}
                    </div>
                    <div className="flex ">
                        <img src={speaker} alt="" className="h-15 w-15 me-3" />
                        <div>
                            <p className="text-sm font-bold name-f">Need Help, Call now!</p>
                            <p className="textsm font-light name-f">+234 xxx xxx xxx</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-black py-1 ">
                <div className="w-[90%] mx-auto justify-between flex items-center ">
                    <div>
                        <p className="font-bold text-white text-sm">All rights reserved. <span
                            className="text-xs text-gray-300 font-light">Exclusive 5ive 2026</span></p>
                    </div>

                    <div className="flex gap-5">
                        <img src={visa} alt="" className="w-7 h-7" />
                        <img src={verve} alt="" className="w-7 h-7" />
                        <img src={logo} alt="" className="w-7 h-7" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;