import { Outlet } from "react-router-dom";

export default function Defaultlayout(){
    return(
        <>
            <div>
                Default
            </div>
           <Outlet/>
        </>
    )
}