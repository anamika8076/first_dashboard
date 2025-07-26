import { Routes,Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Inventory from "../../pages/inventory";
import Orders from "../../pages/orders";
import Customers from "../../pages/customers";
import Contacts from "../../pages/contacts";

function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                
            </Routes>
    )
}
export default AppRoutes;