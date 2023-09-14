import { Outlet } from "react-router-dom";
import '../stylesheets/guestlayout.css';


export default function Guestlayout(){
    return(
        <div className="wrapper">
            <div className="guestlayout-body">
            <Outlet/>
            </div>
        </div>
    )
}