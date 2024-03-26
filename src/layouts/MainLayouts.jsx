import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;