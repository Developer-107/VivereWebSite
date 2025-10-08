import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function Layout(){

  const location = useLocation();
  

    return (
        <>
        <Navbar/>
        <Outlet /> {/* renders matched child route */}
        <Footer/>
        </>
    )
}



export default Layout;