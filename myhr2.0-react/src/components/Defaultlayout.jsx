import { Outlet } from "react-router-dom";
// import  TopHeader  from "./Topheadear/Topheader.jsx";
import  {TopHeader}  from "./Topheader/Topheader.jsx";
// import  Sidebar  from "./Sidebar/Sidebar.jsx";
import { SidebarMenu } from './Sidebar/Sidebar.jsx';
import '../stylesheets/defaultlayout.css';

const topHeader = TopHeader({ type: "custom", additionalProp: "someValue" });
const sidebarMenu = SidebarMenu({ type: "custom", additionalProp: "someValue" });

export default function Defaultlayout(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                {topHeader}
                {sidebarMenu}
                    {/* <nav className="navbardefault">
                        <div className="navbardefaultbody">
                            <img id='myhrflatwhite' src={myhrflatwhite} alt='myhr-white'/>
                            <input id="searchhereinput" placeholder="Search here"></input>
                            <i className="fa-solid fa-magnifying-glass" id="magnifyingglass"></i>
                            <i className="fa-regular fa-bell" id="notifbell"></i>
                        </div>
                    </nav> */}
                <Outlet/>
                </div>
            </div>
           
        </>
    )
}