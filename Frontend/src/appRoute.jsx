import Login from "./pages/Login";
import {Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
function AppRoute() {
    return (
        <>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </>

    )
}

export default AppRoute;