import { Routes,Route } from "react-router-dom"
import { Cart } from "../Pages/Cart"
import { HomePage } from "../Pages/HomePage"
import { Product } from "../Pages/Product"
import { Products } from "../Pages/Products"

export const All=()=>{
    return(
       <Routes>
           <Route path ="/" element={<HomePage/>}/>    
           <Route path ="/cart" element={<Cart/>}/>    
           <Route path ="/products" element={<Products/>}/>    
           <Route path ="/product" element={<Product/>}/>    

       </Routes>
    )
}