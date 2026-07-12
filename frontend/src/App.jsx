import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Dashboard from "./pages/dashboard/Dashboard";

import AssetList from "./pages/assets/AssetList";
import AddAsset from "./pages/assets/AssetRegistration";
import AllocateAsset from "./pages/assets/AssetAllocation";

import Departments from "./pages/departments/Departments";
import Categories from "./pages/categories/Categories";
import Maintenance from "./pages/maintenance/Maintenance";
import Booking from "./pages/booking/Booking";

import Reports from "./pages/reports/Reports";

import Layout from "./layouts/layout";


function App(){

return(

<BrowserRouter>

<Routes>

{/* Without Sidebar */}

<Route path="/" element={<Login/>}/>

<Route path="/signup" element={<Signup/>}/>


{/* With Sidebar */}

<Route element={<Layout/>}>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/assets" element={<AssetList/>}/>

<Route path="/add-asset" element={<AddAsset/>}/>

<Route path="/allocate-asset" element={<AllocateAsset/>}/>

<Route path="/departments" element={<Departments/>}/>

<Route path="/categories" element={<Categories/>}/>

<Route path="/maintenance" element={<Maintenance/>}/>

<Route path="/booking" element={<Booking/>}/>

<Route path="/reports" element={<Reports/>}/>

</Route>


</Routes>

</BrowserRouter>

)

}

export default App;