import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import bg_1 from "../../Images/bg_1.jpg";
import bg_2 from "../../Images/bg_2.jpg";
import Hero from "./Hero";


function Home() {
    return (
        <>
            {/* <NavBar /> */}
            <div className="h-dvh  w-full  Home-background">
                <Hero />
                {/* <Footer/> */}
            </div>
        </>
    );

}

export default Home;