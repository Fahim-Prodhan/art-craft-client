import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;