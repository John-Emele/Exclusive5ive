import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import shirt from "../../Images/t-shirt.png"
import cap from "../../Images/cap.png"
import pants from "../../Images/pants.png"
import hoddie from "../../Images/hoddie.png"
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";


const categories = [
    {
        id: 0,
        title: "T-Shirts",
        image: shirt,
        price: 200000
    },
    {
        id: 1,
        title: "Caps",
        image: cap,
        price: 50000
    },
    {
        id: 2,
        title: "Pants",
        image: pants,
        price: 100000
    },
    {
        id: 3,
        title: "Hoddies",
        image: hoddie,
        price: 150000
    }
];

const sizes = [
    "s", "m", "xl", "2xl"
];

const colors = [
    "red",
    "blue",
    "green",
    "yellow"
];


function Body() {
    const { category, product_id } = useParams();
    const [current_product, setCurrent_Product] = useState("")
    const [product_ID, setProduct_id] =  useState(product_id)

    // useEffect(() => {
    //     const getProduct = () => {
    //         const current = categories.find(s => s.id === product_id);
    //         setCurrent_Product(current);
    //     }
    //     getProduct();
    // }, [])

    // useEffect(() => {
    //     const Change = (id) => {
    //         const current = categories.find(s => s.id === product_id);
    //         setProduct_id(current.id);
            
    //         console.log(id);
    //     }
    // }, [])

    // console.log(product_id);
    return (
        <div className="w-[95%] mx-auto lg:flex  h-dvh">
            <div className="flex gap-3  h-150 mb-3 pe-5 lg:w-[55%] mx-auto">
                <div className="w-[20%] mx-auto grid grid-cols-1 overflow-y-auto right-side">
                    {
                        categories.length ? categories.map((cat) => (
                            <img src={cat.image} alt="" className="w-20 h-20 md:w-30 md:h-30 md:mb-4 object-contain object-center border- border-1 border-gray-300 shadow-sm rounded-[5px]" onMouseOver={() => {
                                setProduct_id(cat.id)
                            }} />
                        )) :
                            null
                    }

                </div>

                <img src={categories[product_ID].image} alt="" className="w-[80%] mx-auto h-full shadow-sm border border-1 border-gray-300 md:object-cover  rounded-[10px]" />

            </div>
            <div className="lg:w-[45%] mx-auto pt-5 lg:py-10 lg:h-dvh lg:border-s lg:border-s-solid lg:border-s-1 lg:border-s-gray-300 lg:ms-3 lg:ps-5  mb-10">
                <p className="text-3xl lg:text-5xl font-bold font-black mb-1  lg:mb-5 uppercase">Jesus is King Tee</p>
                <p className="font-bold text-gray-600 md:text-3xl lg:text-3xl text-lg mb-1 lg:mb-5 font-black">₦18000</p>
                <p className="text-gray-700 font-medium md:text-xl text-sm mb-2 lg:mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel ad voluptate fugiat laboriosam labore?</p>
                <div className="my-3 lg:my-7">
                    <h1 className="text-gray-900 text-sm lg:text-xl font-bold mt-3 mb-1 lg:mb-3">Size</h1>
                    <div className="flex gap-10 items-center">
                        <div className="flex justify-between w-full items-center">
                            <div className="grid grid-cols-5 gap-5 ">
                                {
                                    sizes.length ? sizes.map((size) => (
                                        <div className="md:h-12 md:w-12 h-10 w-10  py-2  rounded-[4px] border border-1 border-gray-300">
                                            <p className="text-center font-bold font-black md:text-xl text-sm uppercase text-gray-600">
                                                {size}
                                            </p>
                                        </div>
                                    ))
                                        :
                                        null
                                }
                            </div>
                            <div className="grid grid-cols-5 md:gap-3 gap-3">
                                {
                                    colors.length ? colors.map((color) => (
                                        <div
                                            style={
                                                {
                                                    backgroundColor: color
                                                }
                                            }
                                            className="
                                    rounded-full
                                    mb-3
                                    h-6 w-6
                                    md:w-10 md:h-10
                                    border
                                    border-2
                                    border-gray-200
                                    "
                                        ></div>
                                    )) :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center  justify-between mb-3 gap-2">
                    <p className="font-black font-bold text-gray-900 text-xl lg:text-2xl">Quantity</p>
                    <div className=" rounded-[5px]   h-10 lg:h-12 flex items-center  ">
                        <div className="flex  gap-3  px-3 lg:px-8 h-full items-center border border-1  border-gray-400">
                            <AiOutlineMinus className=" font-black font-bold text-2xl lg:text-3xl  text-black" />
                            <p className=" font-black font-bold text-lg lg:text-3xl text-gray-600">1</p>
                            <AiOutlinePlus className=" font-black font-bold text-2xl lg:text-3xl text-black" />
                        </div>
                        <div className="bg-red-700 h-full rounded-e-[5px]">
                            <FaTrashAlt className="text-white lg:px-2  px-2 lg:px-3 md:mt-1 lg:mt-0   lg:text-5xl text-4xl" />
                        </div>
                    </div>

                </div>
                <button className="bg-red-600 border border-2 border-red-600 font-medium text-white w-full hover:bg-red-800 hover:border-red-800 p-2 text-sm uppercase  flex gap-3  justify-center text-center">
                    <TiShoppingCart className="text-white text-2xl text-center" />
                    Add to cart</button>
                <button className="font-medium text-black mt-2 hover:bg-black hover:text-red-600 text-sm uppercase w-full p-2 text-center border-2  bg-transparent">Buy it now</button>
            </div>
        </div>
    );
}
export default Body;