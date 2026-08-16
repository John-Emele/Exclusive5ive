import NavBar from "../../Components/NavBar";
import Body from "./Body";

function SingleProduct(){
    return(
      <div className="bg-gray-50 h-dvh overflow-y-auto right-side">
        <NavBar/>
        <Body/>
      </div>
    );
}

export default SingleProduct;