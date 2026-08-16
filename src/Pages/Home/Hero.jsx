
import bg_1 from "../../Images/bg_1.jpg";
import bg_2 from "../../Images/bg_2.jpg";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import {
    LuSearch,
    LuUserRound,
    LuShoppingBag,
    LuTruck,
    LuShieldCheck,
    LuRefreshCw,
    LuArrowRight,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import NavBar from "../../Components/NavBar";


// function Hero() {
//     return (
//         <div className="h-100 w-[95%] mx-auto" style={ {
//             backgroundImage: `url(${bg_1})`,
//             backgroundPosition: "right",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat"
//         }}>

//         </div>
//         // <div className="h-100 bg-transparent w-[95%] py-10 mx-auto shadow-lg rounded-[20px]  flex items-center">
//         //     <div className="w-[50%]  mx-auto">
//         //         <p className="brand-name uppercase font-bold text-4xl mb-5">New Addition to the collection</p>
//         //         <button className="bg-black text-white hover:bg-red-600 text-sm py-2 px-5 rounded-[10px]">Explore</button>
//         //     </div>
//         //     <div className="w-[40%] h-100 mx-auto">
//         //         <img src={bg_1} alt="" className="w-full rounded-[10px] h-full object-cover " />
//         //     </div>
//         // </div>
//     );
// }

// import heroImage from "./assets/your-image.jpg";

// const Hero = () => {
//     return (
//         //     <section className="relative min-h-screen overflow-hidden bg-black">

//         //         {/* IMAGE */}
//         //         <img
//         //             src={bg_1}
//         //             alt=""
//         //             className="
//         //   absolute
//         //   inset-0
//         //   h-full
//         //   w-full
//         //   object-cover
//         //   object-right
//         // "
//         //         />

//         //         {/* DARK OVERLAY */}
//         //         <div
//         //             className="
//         //   absolute
//         //   inset-0
//         //   bg-gradient-to-r
//         //   from-black
//         //   via-black/80
//         //   to-transparent
//         // "
//         //         />

//         //         {/* NAVBAR */}
//         //         <nav className="relative z-10 flex items-center justify-between px-16 py-7 text-white">

//         //             <h2 className="text-3xl font-bold">
//         //                 Faithwear
//         //             </h2>

//         //             <div className="flex gap-10">
//         //                 <a href="#" className="text-red-400">Home</a>
//         //                 <a href="#">Shop</a>
//         //                 <a href="#">Collections</a>
//         //                 <a href="#">About</a>
//         //                 <a href="#">Contact</a>
//         //             </div>

//         //             <div className="flex gap-5">
//         //                 🔍
//         //                 👤
//         //                 🛒
//         //             </div>

//         //         </nav>

//         //         {/* CONTENT */}
//         //         <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center px-16">

//         //             <div className="max-w-xl text-white">

//         //                 <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-red-400">
//         //                     FAITH. PURPOSE. STYLE.
//         //                 </p>

//         //                 <h1 className="text-6xl font-black leading-[1.05]">
//         //                     JESUS IS KING.
//         //                     <br />
//         //                     I'M SAVED.
//         //                 </h1>

//         //                 <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
//         //                     Wear your faith boldly. Our collection is a reminder
//         //                     of who you are and whose you are.
//         //                 </p>

//         //                 <div className="mt-8 flex gap-4">

//         //                     <button className="rounded-md bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
//         //                         SHOP NOW →
//         //                     </button>

//         //                     <button className="rounded-md border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
//         //                         EXPLORE COLLECTIONS
//         //                     </button>

//         //                 </div>

//         //             </div>

//         //         </div>

//         //     </section>



//         //     <section className="relative min-h-screen overflow-hidden bg-black">

//         //   {/* IMAGE */}
//         //   <img
//         //     src={bg_1}
//         //     alt="Faithwear collection"
//         //     className="
//         //       absolute
//         //       inset-0
//         //       h-full
//         //       w-full
//         //       object-cover
//         //       object-right
//         //     "
//         //   />

//         //   {/* BLACK → TRANSPARENT TRANSITION */}
//         //   <div
//         //     className="
//         //       absolute
//         //       inset-0
//         //       bg-gradient-to-r
//         //       from-black
//         //       via-black
//         //       via-[45%]
//         //       via-black/80
//         //       via-[60%]
//         //       to-transparent
//         //     "
//         //   />

//         //   {/* NAVBAR */}
//         //   <nav className="relative z-10 flex items-center justify-between px-16 py-7 text-white">

//         //     <h2 className="text-3xl font-bold">
//         //       Faithwear
//         //     </h2>

//         //     <div className="flex gap-10">
//         //       <a href="#" className="text-red-500">
//         //         Home
//         //       </a>

//         //       <a href="#">Shop</a>
//         //       <a href="#">Collections</a>
//         //       <a href="#">About Us</a>
//         //       <a href="#">Contact</a>
//         //     </div>

//         //     <div className="flex gap-5">
//         //       🔍
//         //       👤
//         //       🛒
//         //     </div>

//         //   </nav>

//         //   {/* HERO CONTENT */}
//         //   <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center px-16">

//         //     <div className="max-w-xl text-white">

//         //       <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-red-500">
//         //         FAITH. PURPOSE. STYLE.
//         //       </p>

//         //       <h1 className="text-6xl font-black leading-[1.05]">
//         //         JESUS IS KING.
//         //         <br />
//         //         I'M SAVED.
//         //       </h1>

//         //       <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
//         //         Wear your faith boldly. Our collection is a reminder
//         //         of who you are and whose you are.
//         //       </p>

//         //       <div className="mt-8 flex gap-4">

//         //         <button className="rounded-md bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
//         //           SHOP NOW →
//         //         </button>

//         //         <button className="rounded-md border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
//         //           EXPLORE COLLECTIONS
//         //         </button>

//         //       </div>

//         //     </div>

//         //   </div>

//         // </section>
//     );
// };

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* IMAGE */}
            <img
                src={bg_1}
                alt=""
                className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      md:object-right
      object-center
    "
            />

            {/* BLACK → TRANSPARENT GRADIENT */}
            <div
                className="
    
      absolute
      inset-0
      bg-gradient-to-r
      md:from-black
      from-black/90
      md:via-black/70
      via-black/60
      to-transparent
    "
                loading="eager"
                fetchPriority="high"
                decoding="sync"
            />

            {/* CONTENT */}
            <NavBar />

            <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center md:px-16 mx-5">

                <div className="max-w-xl text-white">

                    <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-red-500">
                        FAITH. PURPOSE. STYLE.
                    </p>

                    <h1 className="md:text-6xl text-5xl font-black leading-[1.05]">
                        JESUS IS KING
                        <br />
                        I'M SAVED.
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-white/80 md:mb-0 mb-30">
                        Wear your faith boldly. Our collection is a reminder
                        of who you are and whose you are.
                    </p>

                    <div className="md:mt-8 md:flex gap-4 pb-3">

                        <button className="rounded-md w-full mb-5 md:mb-0  bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
                            SHOP NOW →
                        </button>

                        <button className="rounded-md w-full border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
                            EXPLORE COLLECTIONS
                        </button>

                    </div>

                </div>
            </div>

        </section>
    );
}

// function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-black text-white">

//       {/* Background Image */}
//       <img
//         src={bg_1}
//         alt="Faithwear collection"
//         className="absolute inset-0 h-full w-full object-cover object-right"
//       />

//       {/* Black → Transparent Transition */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 via-45% to-transparent" />

//       {/* Navbar */}
//       <nav className="relative z-20 flex h-[110px] items-center border-b border-white/10 px-8 lg:px-16">

//         <div className="w-[220px]">
//           <h2 className="font-serif text-4xl font-bold italic">
//             Faithwear
//           </h2>
//           <div className="ml-20 -mt-1 text-[10px] font-semibold tracking-widest text-red-500">
//             EST. 2024
//           </div>
//         </div>

//         <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
//           <a
//             href="#"
//             className="relative py-3 text-red-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500"
//           >
//             Home
//           </a>

//           <a href="#" className="transition hover:text-red-500">Shop</a>
//           <a href="#" className="transition hover:text-red-500">Collections</a>
//           <a href="#" className="transition hover:text-red-500">About Us</a>
//           <a href="#" className="transition hover:text-red-500">Contact</a>
//         </div>

//         <div className="ml-auto flex items-center gap-6">
//           <button className="transition hover:text-red-500">
//             <LuSearch size={28} strokeWidth={1.7} />
//           </button>

//           <button className="transition hover:text-red-500">
//             <LuUserRound size={27} strokeWidth={1.7} />
//           </button>

//           <button className="relative transition hover:text-red-500">
//             <LuShoppingBag size={28} strokeWidth={1.7} />

//             <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold">
//               2
//             </span>
//           </button>
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex min-h-[calc(100vh-110px)] items-center px-8 lg:px-16">

//         <div className="w-full max-w-[650px]">

//           <p className="mb-6 text-sm font-semibold tracking-[0.35em] text-red-500 md:text-base">
//             FAITH. PURPOSE. STYLE.
//           </p>

//           <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
//             JESUS IS KING.
//             <br />
//             I'M SAVED.
//           </h1>

//           <p className="mt-7 max-w-[540px] text-base leading-7 text-white/75 sm:text-lg">
//             Wear your faith boldly. Our collection is a reminder
//             of who you are and whose you are.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">

//             <button className="group flex items-center gap-5 rounded-md bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
//               SHOP NOW

//               <LuArrowRight
//                 size={22}
//                 className="transition duration-300 group-hover:translate-x-1"
//               />
//             </button>

//             <button className="rounded-md border border-red-500 px-8 py-4 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white">
//               EXPLORE COLLECTIONS
//             </button>

//           </div>

//           {/* Features */}
//           <div className="mt-16 grid max-w-[600px] grid-cols-1 gap-8 sm:grid-cols-3">

//             <div>
//               <LuTruck size={32} strokeWidth={1.5} className="mb-4 text-red-500" />
//               <h3 className="font-semibold">Fast Shipping</h3>
//               <p className="mt-1 text-sm text-white/60">Across Nigeria</p>
//             </div>

//             <div>
//               <LuShieldCheck size={32} strokeWidth={1.5} className="mb-4 text-red-500" />
//               <h3 className="font-semibold">Secure Payment</h3>
//               <p className="mt-1 text-sm text-white/60">100% Protected</p>
//             </div>

//             <div>
//               <LuRefreshCw size={32} strokeWidth={1.5} className="mb-4 text-red-500" />
//               <h3 className="font-semibold">Easy Returns</h3>
//               <p className="mt-1 text-sm text-white/60">7-Day Returns</p>
//             </div>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

export default Hero;
// export default Hero;