import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/navbar/footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#eee]">
            <div className="sticky top-0 z-[99]"><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;