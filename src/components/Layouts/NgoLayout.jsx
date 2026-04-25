import { Outlet } from "react-router-dom";
import NgoNavbar from "./NgoNavbar";
import NgoFooter from "./NgoFooter";
export default function NgoLayout(){
    return(
        <>
        <NgoNavbar/>
        <Outlet/> {/* child page load */}
       <NgoFooter/>
        </>
    )
}