import { Routes,Route } from "react-router-dom"
import { Cart } from "../Pages/Cart"
import { HomePage } from "../Pages/HomePage"
import { Login } from "../Pages/Login"
import { Orders } from "../Pages/Orders"
import { Product } from "../Pages/Product"
import { Products } from "../Pages/Products"
import { AuthWrapper } from "./AuthWrapper"

export const All=()=>{
    return(
       <Routes>
           <Route path ="/" element={<HomePage/>}/>    
           <Route path ="/cart" element={<AuthWrapper>
            <Cart/>
            </AuthWrapper>}/>    
           <Route path ="/products" element={<Products/>}/>    
           <Route path ="/products/:id" element={<Product/>}/>    
            <Route path="/orders/" element={<Orders/>}/>
         <Route path="/login" element={<Login/>}/>
       
       </Routes>
    )
}