import { Link } from "react-router-dom";

function Product({ title, image, price, id }) {
    return (
        <Link to={`/shop/category/${id}`}>
            <div className="mb-5">

                <img src={image} alt="" className="object-conatain h-full  w-full shadow-sm mb-1 object-center rounded-[5px] " />

                <p className="  md: md:text-xl text-lg font-bold text-gray-900">{title}</p>
                <p className=" md:text-sm text-[15px] font-medium text-gray-600">₦{price}</p>

            </div>
        </Link>
    )
}
export default Product;