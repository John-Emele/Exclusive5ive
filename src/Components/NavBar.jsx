import { NavLink, useParams, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";
import { GoHome } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { VscCollectionSmall } from "react-icons/vsc";
import { MdContactSupport } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { useState, useRef } from "react";





const navLinks = [
    {
        name: "Home",
        path: "/",
        image: GoHome
    },
    {
        name: "Shop",
        path: "/shop",
        image: FaBagShopping
    },
    {
        name: "Collections",
        path: "/collections",
        image: VscCollectionSmall
    },
    {
        name: "About",
        path: "/about-us",
        image: FcAbout
    },
    {
        name: "Contact",
        path: "/contact",
        image: MdContactSupport
    }
];

const navlist = [
    CiSearch, GoHeart, TiShoppingCart, FaUser
]
function NavBar() {

    const location = useLocation();

    const page = location.pathname.split("/")[1];

    console.log(page);

    const [toggle, setToggle] = useState(false);
    const [dark_text, setText] = useState(false);
    const [show, setSh] = useState(false);
    const menu_ref = useRef();
    console.log(dark_text);
    // const [title, setTitle] = useState("home");

    // const drop = (e) => {
    //     menu_ref.current
    //     setTimeout( () => {
    //         setToggle(true)
    //     },250)
    // }
    return (
        // <>
        //     <div className="bg-red-600">
        //         <p className="text-sm text-white font-medium text-center">Welcome to Exclusive 5ive</p>
        //     </div>
        //     <div className="bg-black w-full p-3 ">
        //         <div className="flex items-center justify-between w-[95%] mx-auto">
        //             <p className="text-xl brand-name font-bold text-gray-100">Exclusive<sup className="text-red-500 text-lg font-medium"> 5ive</sup></p>

        //             <ul className="flex items-center">
        //                 <NavLink to="/" className={({ isActive }) =>
        //                     isActive ? "text-xs mb-2  text-red-700 p-2 font-medium" :
        //                         "text-sm font-medium text-white text-gray-900 p-2"}>
        //                     <li></li>Home
        //                 </NavLink>
        //                 <NavLink to="/shop" className={({ isActive }) =>
        //                     isActive ? "text-xs mb-2 text-white text-red-700 p-2 font-medium" :
        //                         " font-medium text-white  text-sm text-gray-900 p-2"}>
        //                     <li></li>Shop
        //                 </NavLink>
        //                 <NavLink to="/contact" className={({ isActive }) =>
        //                     isActive ? "text-xs mb-2 text-white text-red-700 p-2 font-medium" :
        //                         "text-sm font-medium text-white text-gray-900 p-2"}>
        //                     <li></li>Contact
        //                 </NavLink>
        //             </ul>
        //             <div className="flex items-center gap-5">
        //                 <div className="relative">
        //                     <CiSearch className="text-white text-2xl relative" />
        //                     <div className="w-5 h-5 absolute top-[-8px] left-3 pb-1 border border-2  rounded-full bg-red-500">
        //                         <p className="text-xs text-white pb-3 font-medium w-full text-center">10</p>
        //                     </div>
        //                 </div>
        //                 <div className="relative">
        //                     <GoHeart className="text-white text-xl" />
        //                     <div className="w-5 h-5 absolute top-[-8px] left-3 pb-1 border border-2  rounded-full bg-red-500">
        //                         <p className="text-xs text-white pb-3 font-medium w-full text-center">10</p>
        //                     </div>
        //                 </div>
        //                 <div className="relative">
        //                     <BsCart className="text-white text-xl" />
        //                     <div className="w-5 h-5 absolute top-[-8px] left-3 pb-1 border border-2  rounded-full bg-red-500">
        //                         <p className="text-xs text-white pb-3 font-medium w-full text-center">10</p>
        //                     </div>
        //                 </div>
        //                 <div className="relative">
        //                     <FaUser className="text-white text-xl" />
        //                     <div className="w-5 h-5 absolute top-[-8px] left-3 pb-1 border border-2  rounded-full bg-red-500">
        //                         <p className="text-xs text-white pb-3 font-medium w-full text-center">10</p>
        //                     </div>
        //                 </div>

        //                 {/* <TiShoppingCart className="text-white text-xl" /> */}
        //                 {/* <LuSearch /> */}
        //             </div>
        //         </div>
        //     </div>
        // </>


        <>
            <div className="relative z-10 shadow-sm mb-4">
                {/* Navbar + hero content */}
                <nav className="relative z-10  flex items-center justify-between w-[90%] py-5   mx-auto text-white">

                    <h2 className={
                        page !== "" ? "text-3xl font-bold font-black text-black" :
                            "text-3xl font-bold font-black  text-white"
                    }>
                        <span className="md:text-4xl text-3xl">E</span>xclusive<span className="text-red-600 font-bold md:text-3xl text-2xl" > 5ive</span>
                    </h2>

                    <GrMenu className={`${page !== "" ? "text-black" : "text-white"} text-4xl lg:hidden`}  onClick={() => {
                        setToggle(!toggle);
                    }}/>

                    <ul className="lg:flex gap-4 items-center hidden">

                        {
                            navLinks.map((li) => (
                                <NavLink to={li.name.toLowerCase() !== "home" ? `/${li.name.toLowerCase()}` : `/`} className={({ isActive }) =>
                                    isActive ? "text-red-700 p-2 border-b border-b border-b-2 border-b-red-700 font-bold" :
                                        page !== "" ? "text-lg font-medium hover:text-red-700  text-gray-900 p-2" :
                                            "text-lg font-medium hover:text-red-700 text-white text-gray-900 p-2"}>
                                    {li.name}
                                </NavLink>
                            ))
                        }

                        {/* <NavLink to="/shop" className={({ isActive }) =>
                            isActive ? "text-red-700 border-b border-b-2 border-b-red-600  p-2 font-bold" :
                                " font-medium text-white hover:text-red-700 text-lg text-gray-900 p-2"}>
                            <li></li>Shop
                        </NavLink>
                        <NavLink to="/collections" className={({ isActive }) =>
                            isActive ? "text-red-700 border-b border-b-2 border-b-red-600  p-2 font-bold" :
                                " font-medium text-white hover:text-red-700 text-lg text-gray-900 p-2"}>
                            <li></li>Collections
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "text-red-700 border-b border-b-2 border-b-red-600  p-2 font-bold" :
                                " font-medium text-white hover:text-red-700 text-lg text-gray-900 p-2"}>
                            <li></li>About Us
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "text-red-700 border-b border-b-2 border-b-red-600  p-2 font-bold" :
                                "text-lg font-medium text-white hover:text-red-700 text-gray-900 p-2"}>
                            <li></li>Contact
                        </NavLink> */}
                    </ul>

                    <div className="lg:flex items-center  gap-5 hidden">
                        {
                            navlist.map((li) => {
                                const Icon = li;

                                return (
                                    <div className="relative">
                                        <Icon className={
                                            page !== "" ? "text-black text-3xl relative" :
                                                "text-white text-3xl relative"
                                        }
                                        />
                                        {
                                            Icon === TiShoppingCart || Icon === GoHeart ?
                                                <div className="w-5 h-5 absolute top-[-4px] right-[-10px] rounded-full bg-red-600 h-5 w-5 right-[-3px] pb-1  rounded-full ">
                                                    <p className="text-[13px] text-white pb-3 font-medium w-full text-center">0</p>
                                                </div> : null
                                        }
                                    </div>
                                )
                            })
                        }
                        {/* <div className="relative">
                            <GoHeart className="text-white text-3xl" />
                            <div className="w-5 h-5 absolute top-[-8px] left-3 pb-1   rounded-full ">
                                <p className="text-xs text-white pb-3 font-medium w-full text-center">10</p>
                            </div>
                        </div>
                        <div className="relative">
                            <TiShoppingCart className="text-white text-4xl" />
                            <div className="w-5 h-5 absolute top-[-4px] rounded-full bg-red-600 h-5 w-5 right-[-3px] pb-1  rounded-full ">
                                <p className="text-[13px] text-white pb-3 font-medium w-full text-center">10</p>
                            </div>
                        </div>
                        <div className="relative">
                            <FaUser className="text-white text-3xl" /> 
                        </div> */}

                        {/* <TiShoppingCart className="text-white text-xl" /> */}
                        {/* <LuSearch /> */}
                    </div>



                </nav>
            </div>

           
             <div className="lg:hidden">
                {/* <MdCancel className="text-white text-3xl  top-1 right-5 absolute" /> */}
                <div className={`lg:hidden side-menu overflow-y-auto right-side pt-10 pb-10 fixed left-0 topo-0 bottom-0 right-[20%] rounded-e-[20px]  h-dvh z-1000 bg-black/90  ${toggle ? "show" : ""}`}>


                    <ul className=" ">
                        {/* <li className="w-[90%] mx-auto">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block p-2 bg-[#6C63FF] text-center text-purple-900 font-bold rounded-[10px] mb-3 text-sm flex gap-2 items-center"
                                        : "block p-2 text-white text-center font-bold rounded-[10px] hover:bg-slate-700 mb-3 flex gap-2 text-sm items-center"
                                }
                            >
                                Home
                            </NavLink>
                        </li> */}
                        <li className=" mx-auto">
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "block text-black p-2 flex  items-center gap-1 mb-5 bg-white font-bold" :
                                    "block text-lg font-medium mb-3 flex  items-center gap-1 hover:text-red-700 text-white text-gray-900 p-2"}>
                                <GoHome className="text-red-800 text-3xl" />
                                Home
                            </NavLink>
                        </li>
                        <NavLink to="/shop" className={({ isActive }) =>
                            isActive ? "block text-black p-2 flex  items-center gap-1 mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 flex  items-center gap-1 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <FaBagShopping className="text-red-800 text-3xl" />
                            Shop
                        </NavLink>
                        <NavLink to="/collections" className={({ isActive }) =>
                            isActive ? "block text-black p-2  mb-5 flex  items-center gap-1 bg-white font-bold" :
                                "block text-lg font-medium mb-3 flex  items-center gap-1 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <VscCollectionSmall className="text-red-800 text-3xl" />
                            Collections
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "block text-black p-2  mb-5 flex  items-center gap-1 bg-white font-bold" :
                                "block text-lg font-medium mb-3 flex  items-center gap-1 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <MdContactSupport className="text-red-800 text-3xl" />
                            About
                        </NavLink>
                        {/* <NavLink to="/about" onClick={() => {
                            setText(dark_text(true)
                            );
                            console.log(dark_text);
                        }} className={({ isActive }) =>
                            isActive ? "block text-black p-2  flex  items-center gap-1 mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 flex  items-center gap-1 hover:text-red-700 text-white text-gray-900 p-2"}>
                            < className="text-red-800 text-3xl" />
                            About Us
                        </NavLink> */}
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "block text-black p-2 flex  items-center gap-1 mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 flex  items-center gap-1 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <MdContactSupport className="text-red-800 text-3xl" />
                            Contact
                        </NavLink>
                    </ul>
                    <div className="">
                        {/* {
                            navLinks.lenght ? list.map((li) => (
                                <NavLink to={`/${li}`} className={({ isActive }) =>
                                    isActive ? "text-red-700 p-2 border-b border-b border-b-2 border-b-red-700 font-bold" :
                                        "text-lg font-medium hover:text-red-700 text-white text-gray-900 p-2"}>
                                    {li}
                                </NavLink>
                            )) : null
                        } */}
                        <NavLink to="/search" className={({ isActive }) =>
                            isActive ? "block text-black p-2  mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <div className="relative flex items-center gap-1">
                                <CiSearch className="text-red-700  text-3xl  relative" />
                                <p className="text-xl">Search</p>
                            </div>
                        </NavLink>
                        <NavLink to="/wishlist" className={({ isActive }) =>
                            isActive ? "block text-black p-2  mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <div className="relative flex items-center gap-1">
                                <GoHeart className="text-red-700  text-3xl" />
                                <p className="text-xl">Wishlist</p>
                            </div>
                        </NavLink>
                        <NavLink to="/cart" className={({ isActive }) =>
                            isActive ? "block text-black p-2  mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <div className="relative flex items-center gap-3">
                                <TiShoppingCart className="text-red-700  text-3xl" />
                                <div className="w-5 h-5 absolute top-[-4px] rounded-full bg-white h-5 w-5 left-5 pb-1  rounded-full ">
                                    <p className="text-[13px] text-red-700 pb-3 font-medium w-full text-center">10</p>
                                </div>
                                <p className="text-xl">Cart</p>
                            </div>
                        </NavLink>
                        <NavLink to="/profile" className={({ isActive }) =>
                            isActive ? "block text-black p-2  mb-5 bg-white font-bold" :
                                "block text-lg font-medium mb-3 hover:text-red-700 text-white text-gray-900 p-2"}>
                            <div className="relative flex items-center gap-3">
                                <FaUser className="text-red-700  text-3xl" />
                                <p className="text-xl">Profile</p>
                            </div>
                        </NavLink>
                        <div className="relative">
                            {/* < className="text-white text-3xl" /> */}
                            {/* <div className="w-5 h-5 absolute top-[-8px] left-3 pb-1  rounded-full ">
                                <p className="text-xs text-white pb-3 font-medium w-full text-center">10</p>
                            </div> */}
                        </div>

                        {/* <TiShoppingCart className="text-white text-xl" /> */}
                        {/* <LuSearch /> */}
                    </div>
                </div>
            </div> 
        </>

    );

}

export default NavBar;