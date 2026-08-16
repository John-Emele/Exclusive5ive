import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { GoGoal } from "react-icons/go";
import bg_1 from "../../Images/bg_1.jpg"





function Body() {
    return (
        <div className="w-[95%] mx-auto  mb-10">

            <div className="lg:flex lg:h-dvh  ">

                <div className="lg:w-[55%] mx-auto">
                    <h1 className="text-4xl text-red-700 font-medium font-black ">About <span>Exclusive</span> <span>5ive</span></h1>
                    <p className="my-3 font-bold font-black text-4xl lg:text-5xl uppercase ">wear your faith. <br />
                        live your purpose
                    </p>
                    <p className="text-gray-600 font-medium my-5 text-xl w-[95%] lg:text-xl"><span className="text-red-700">Excluxive 5ive</span> is more than fashion,
                        it's a movement to inspire believers to wear thier faith boldly and live with purpose every day.</p>


                    <div className="flex items-center mb-5 gap-3  lg:my-10">
                        <GoGoal className="text-red-600 text-5xl lg:text-[60px]" />
                        <div>
                            <p className="font-bold text-black text-2xl lg:text-xxl">Faith Driven</p>
                            <p className="font-medium text-gray-600 text-lg lg:text-lg">We put God first everything we do.</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5 lg:mb-10 gap-3">
                        <GoGoal className="text-red-600 text-5xl lg:text-[60px]" />
                        <div>
                            <p className="font-bold text-black text-2xl lg:text-xl">Quality First</p>
                            <p className="font-medium text-gray-600 text-lg lg:text-lg">Premium materials for everyday comfort.</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5 lg:mb-10 gap-3">
                        <GoGoal className="text-red-600 text-5xl lg:text-[60px]" />
                        <div>
                            <p className="font-bold text-black text-2xl lg:text-xl">Purspose Driven</p>
                            <p className="font-medium text-gray-600 text-lg lg:text-lg">Every piece tells a story of hope.</p>
                        </div>
                    </div>
                </div>

                <img src={bg_1} alt="" className="w-[90%] mx-auto  object-center mt-20  lg:mt-0 h-150 lg:h-160 lg:w-[45%] mx-auto" />
            </div>
        </div>
    );
}
export default Body;