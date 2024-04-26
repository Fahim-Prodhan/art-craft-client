import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/navbar/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Root = () => {
    const{loading} = useContext(AuthContext)
    
    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }
    return (
        <div className="">
            <div className="sticky top-0 z-[99]"><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;