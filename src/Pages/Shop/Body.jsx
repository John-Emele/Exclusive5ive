import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import shirt from "../../Images/t-shirt.png"
import cap from "../../Images/cap.png"
import pants from "../../Images/pants.png"
import hoddie from "../../Images/hoddie.png"
import { colornames } from "color-name-list";
import Product from "../../Components/Product";

const categories = [
    {
        title: "T-Shirts",
        image: shirt,
        price: 200000
    },
    {
        title: "Caps",
        image: cap,
        price: 50000
    },
    {
        title: "Pants",
        image: pants,
        price: 100000
    },
    {
        title: "Hoddies",
        image: hoddie,
        price: 150000
    }
];

const sizes = [
    "s", "m", "xl", "2xl"
]

const colors = [
    "red",
    "blue",
    "green",
    "yellow"
];

// Admin///

// const standardColors = {
//     // Basic colours
//     red: "#FF0000",
//     blue: "#0000FF",
//     green: "#008000",
//     yellow: "#FFFF00",
//     orange: "#FFA500",
//     purple: "#800080",
//     pink: "#FFC0CB",
//     brown: "#A52A2A",
//     black: "#000000",
//     white: "#FFFFFF",
//     gray: "#808080",
//     grey: "#808080",

//     // Common colours
//     navy: "#000080",
//     teal: "#008080",
//     olive: "#808000",
//     maroon: "#800000",
//     lime: "#00FF00",
//     aqua: "#00FFFF",
//     cyan: "#00FFFF",
//     silver: "#C0C0C0",
//     gold: "#FFD700",
//     coral: "#FF7F50",
//     turquoise: "#40E0D0",
//     indigo: "#4B0082",
//     violet: "#EE82EE",

//     // Clothing / fashion colours
//     burgundy: "#800020",
//     wine: "#722F37",
//     cream: "#FFFDD0",
//     beige: "#F5F5DC",
//     khaki: "#F0E68C",
//     tan: "#D2B48C",
//     mustard: "#FFDB58",
//     peach: "#FFE5B4",
//     lavender: "#E6E6FA",
//     lilac: "#C8A2C8",
//     mint: "#98FF98",
//     emerald: "#50C878",
//     forest: "#228B22",
//     "forest green": "#228B22",
//     "royal blue": "#4169E1",
//     "sky blue": "#87CEEB",
//     "baby blue": "#89CFF0",
//     "baby pink": "#F4C2C2",
//     "hot pink": "#FF69B4",
//     "dark red": "#8B0000",
//     "dark blue": "#00008B",
//     "dark green": "#006400",
//     "light blue": "#ADD8E6",
//     "light green": "#90EE90",
//     "light pink": "#FFB6C1",
//     charcoal: "#36454F",
//     ash: "#B2BEB5",
//     mocha: "#967969",
//     chocolate: "#7B3F00",
//     rust: "#B7410E",
//     bronze: "#CD7F32",
//     copper: "#B87333",
//     plum: "#8E4585",
//     wine: "#722F37",
// };

// const findColor = (input) => {
//     const search = input.toLowerCase().trim();

//     // Standard colours FIRST
//     if (standardColors[search]) {
//         return standardColors[search];
//     }

//     // Exact match from color-name-list
//     const match = colornames.find(
//         (color) =>
//             color.name.toLowerCase() === search
//     );

//     return match ? match.hex : null;
// };

// // Handle colour input
// const handleColorChange = (e) => {
//     const value = e.target.value;

//     setColorName(value);

//     const search = value.toLowerCase().trim();

//     // Find colour in our library
//     const hex = standardColors[search];

//     if (hex) {
//         setColorHex(hex);
//     } else {
//         setColorHex("");
//     }
// };

// <div className="p-8">

//     <h2 className="mb-6 text-2xl font-bold">
//         Add Product Colour
//     </h2>

//     {/* Colour name */}
//     <div className="mb-5">

//         <label className="mb-2 block font-medium">
//             Colour Name
//         </label>

//         <input
//             type="text"
//             value={colorName}
//             onChange={handleColorChange}
//             placeholder="e.g. Burgundy"
//             className="
//                         w-full
//                         max-w-md
//                         rounded-md
//                         border
//                         border-gray-300
//                         px-4
//                         py-3
//                         outline-none
//                         focus:border-red-600
//                     "
//         />

//     </div>

//     {/* Colour preview */}
//     <div className="mb-5">

//         <p className="mb-2 font-medium">
//             Colour Preview
//         </p>

//         <div className="flex items-center gap-4">

//             <div
//                 className="
//                             h-12
//                             w-12
//                             rounded-full
//                             border-2
//                             border-gray-300
//                         "
//                 style={{
//                     backgroundColor: colorHex || "#FFFFFF"
//                 }}
//             />

//             <div>

//                 <p className="font-medium">
//                     {colorName || "No colour selected"}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                     {colorHex || "Colour not found"}
//                 </p>

//             </div>

//         </div>

//     </div>

//     {/* Optional native colour picker */}
//     <div className="mb-6">

//         <label className="mb-2 block font-medium">
//             Adjust Colour
//         </label>

//         <input
//             type="color"
//             value={colorHex || "#000000"}
//             onChange={(e) => {
//                 setColorHex(e.target.value);
//             }}
//             className="h-10 w-20 cursor-pointer"
//         />

//     </div>

//     {/* Save button */}
//     <button
//         onClick={() => {
//             const productColor = {
//                 color_name: colorName,
//                 color_hex: colorHex
//             };

//             console.log(productColor);
//         }}
//         disabled={!colorName || !colorHex}
//         className="
//                     rounded-md
//                     bg-red-600
//                     px-6
//                     py-3
//                     font-semibold
//                     text-white
//                     transition
//                     hover:bg-red-700
//                     disabled:cursor-not-allowed
//                     disabled:bg-gray-400
//                 "
//     >
//         Save Colour
//     </button>

// </div>

////////////

function Body() {
    const [filter, setFilter] = useState(false);
    const [selected_size, setSize] = useState(null);
    const [colorName, setColorName] = useState("");
    const [colorHex, setColorHex] = useState("#000000");
    const size_ref = useRef();

    const [showFilter, setShowFilter] = useState(false);
    const [startY, setStartY] = useState(0);
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handlePointerDown = (e) => {
        setStartY(e.clientY);
        setIsDragging(true);

        // Prevent the browser from treating the drag as text selection
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;

        const currentY = e.clientY;
        const distance = currentY - startY;

        // Only allow the panel to move DOWN
        if (distance > 0) {
            setDragY(distance);
        }
    };

    const handlePointerUp = (e) => {
        if (!isDragging) return;

        setIsDragging(false);

        // If dragged down more than 150px → close
        if (dragY > 150) {
            setFilter(false);
        }

        setDragY(0);
    };

    useEffect(() => {
        const show = () => {
            console.log(selected_size)
        };
        show();
    }, [selected_size]);



    // const getColorSuggestions = (input) => {
    //     if (!input.trim()) return [];

    //     return standardColors
    //         .find((color) =>
    //             color.name
    //                 .toLowerCase()
    //                 .includes(input.toLowerCase())
    //         )
    //         .slice(0, 8);
    // };

    // const suggestions = getColorSuggestions(colorName);


    return (
        <div className="relative">
            <div className="flex px-5 relative">
                <div className="md:w-[80%] w-[75%]">
                    <h1 className="text-2xl uppercase font-bold mb-2 text-black font-black">Shop all</h1>
                    <div className="flex items-center gap-1 mb-3">
                        <Link to="/" className="text-gray-600 text-sm font-medium">Home</Link>
                        <p className="text-gray-600 text-sm font-medium">/</p>
                        <Link to="/shop" className="text-gray-600 text-sm font-medium">Shop</Link>
                    </div>
                    <p className="text-gray-900 text-[13px] font-medium">Explore our collection of faith-inspired streetwear made to inspire and empower</p>
                </div>
                <div className="lg:hidden border border-1 flex items-center gap-1 h-10 px-1 absolute bottom-[-5px] right-5  py-2 border-gray-300 rounded-[10px] "
                    onClick={() => {
                        setFilter(!filter);
                    }}
                >
                    <MdOutlineNavigateNext className="text-black rotate-90 text-lg" />
                    <p className="font-bold text-black uppercase text-xs">filter</p>
                    <BsFilterRight className="text-lg text-black" />

                </div>
                <div className="border hidden  border-1 lg:flex items-center gap-1 h-8 px-1 absolute bottom-[-5px] right-5  py-2 border-gray-400 rounded-[10px] "
                >
                    <p className="font-bold text-black uppercase text-xs">sort by:</p>
                    <p className="font-bold text-black  text-xs">Feautured</p>
                    <MdOutlineNavigateNext className="text-black rotate-90 text-lg" />
                </div>
            </div>

            {
                filter ? <div

                    className="
            fixed 
            inset-0
            h-dvh
            z-50
            bg-black/30
            
            
        ">
                    <div
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        style={{
                            transform: `translateY(${dragY}px)`,
                            transition: isDragging
                                ? "none"
                                : "transform 0.3s ease-out",
                        }}
                        className="bg-white  
                        rounded-t-[25px]
                        h-[100dvh] 
                        pb-[env(safe-area-inset-bottom)]
                        absolute bottom-0 top-[60%] right-0 left-0
                        overflow-y-auto
                        touch-none
                        select-none">
                        <div className="p-4">
                            <h1 className="font-bold text-lg">Categories</h1>
                            {
                                categories.length ? categories.map((cat, index) => (
                                    <p key={index} className="flex items-center gap-1 p-2 text-gray-600 hover:bg-red-300 hover:text-red-700 font-medium text-xs">
                                        {cat.title}
                                    </p>
                                )) :
                                    null
                            }

                            <h1 className="font-bold text-lg mt-4">Sizes</h1>
                            {
                                sizes.length ? sizes.map((size, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2" >
                                        <input
                                            type="checkbox"
                                            checked={selected_size === size}
                                            onChange={() => {
                                                setSize(size)
                                                setSize(
                                                    selected_size === size ? nul : size
                                                );


                                            }}
                                            className="
                h-5
                w-5
                appearance-none
                border-2
                border-gray-300
                rounded
                checked:bg-red-600
                cursor-pointer
            "
                                        />
                                        <p className="text-gray-600 hover:bg-red-300 hover:text-red-700 font-medium uppercase text-sm">{size}</p>
                                    </div>
                                )) :
                                    null
                            }
                            <h1 className="font-bold text-lg mt-4 mb-2">Colors</h1>
                            <div className="flex items-center gap-3 ">
                                {
                                    colors.length ? colors.map((cat, index) => (
                                        <p key={index} style={
                                            {
                                                backgroundColor: cat
                                            }
                                        } className="h-7 w-7 border border-2 border-gray-400 rounded-full"></p>
                                    )) :
                                        null
                                }
                            </div>


                        </div>
                    </div>
                </div> :
                    null
            }


            <div className="lg:flex ">

                <div className="lg:w-[20%] mx-auto py-4 ">
                    {/* categories */}
                    <div className="lg:hidden flex justify-between items-center px-5 mt-10 mb-5">
                        <h1 className="uppercase text-black font-bold">categories</h1>
                        <p className="text-sm text-red-700 font-bold">All</p>
                    </div>

                    <div className="lg:block grid grid-cols-4 gap-3 lg:gap-10 ">
                        {
                            categories.length ? categories.map((cat, index) => (
                                <div key={index} className="lg:hidden lg:mb-10">
                                    <img src={cat.image} alt="" className="mb-1 w-full h-full shadow-sm object-contain lg:object-cover object-center rounded-[5px] " />
                                    <p className="text-center text-sm lg:text-2xl font-medium text-gray-800">{cat.title}</p>
                                </div>
                            )) :
                                null
                        }

                        <div

                            className="
                            lg:block
                            hidden
                            h-dvh  
                        ">
                            <div
                            >
                                <div className="p-4">
                                    <h1 className="font-bold text-lg">Categories</h1>
                                    <p className="flex items-center gap-1 p-2 text-gray-600 hover:bg-red-300 hover:text-red-700 font-medium text-xs">All</p>
                                    {
                                        categories.length ? categories.map((cat, index) => (
                                            <p key={index} className="flex items-center gap-1 p-2 text-gray-600 hover:bg-red-300 hover:text-red-700 font-medium text-xs">
                                                {cat.title}
                                            </p>
                                        )) :
                                            null
                                    }

                                    <h1 className="font-bold text-lg mt-4">Sizes</h1>
                                    {
                                        sizes.length ? sizes.map((size, index) => (
                                            <div key={index} className="flex items-center gap-2 p-2" >
                                                <input
                                                    type="checkbox"
                                                    checked={selected_size === size}
                                                    onChange={() => {
                                                        setSize(size)
                                                        setSize(
                                                            selected_size === size ? nul : size
                                                        );


                                                    }}
                                                    className="
                h-5
                w-5
                appearance-none
                border-2
                border-gray-300
                rounded
                checked:bg-red-600
                cursor-pointer
            "
                                                />
                                                <p className="text-gray-600 hover:bg-red-300 hover:text-red-700 font-medium uppercase text-sm">{size}</p>
                                            </div>
                                        )) :
                                            null
                                    }
                                    <h1 className="font-bold text-lg mt-4 mb-2">Colors</h1>
                                    <div className=" ">
                                        {
                                            colors.length ? colors.map((cat, index) => (
                                                <p key={index} style={
                                                    {
                                                        backgroundColor: cat
                                                    }
                                                } className="h-7 w-7 border mb-3 border-2 border-gray-400 rounded-full"></p>
                                            )) :
                                                null
                                        }
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* featured products */}
                <div className="px-5 lg:w-[80%] mx-auto">
                    <h1 className="uppercase text-red-700 font-bold mb-3 mt-6">featured products</h1>
                    <div className="grid lg:grid-cols-4 mg:grid-cols-3 grid-cols-2 gap-3 lg:gap-5">
                        {
                            categories.length ? categories.map((cat, index) => (
                                <Product title={cat.title} price={cat.price} image={cat.image} id={index} />
                            )) :
                                null
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Body;