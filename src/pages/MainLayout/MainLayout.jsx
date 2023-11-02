import { Outlet } from "react-router-dom";
import Navber from "../Sheard/Navber/Navber";

const MainLayout = () => {
    return (
        <div>
            <div className="pb-16">
            <Navber/>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;