import { Outlet } from "react-router-dom";
import Header from "../Header/Header"
import Custom_Footer from "../Custom_Footer/Custom_Footer";

export default function Website() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                </main>     
                <Custom_Footer />
        </>
    );
}