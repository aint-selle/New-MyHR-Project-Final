import { Outlet } from "react-router-dom";
import '../stylesheets/defaultlayout.css';


export default function Defaultlayout(){
    return(
        <>
            <div className="wrapper">
                <div className="default-layout-body">
                    default
                </div>
                <Outlet/>
            </div>
           
        </>
    )
}