import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="w-[87%] mx-auto">
                <Nav></Nav>
            </div>
            {/* packet */}
            <section className="w-[87%] mx-auto min-h-[calc(100vh-224px)]">
                <Outlet></Outlet>
            </section>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;