import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"

export const AuthWrapper=({children})=>{
    const authStatus=useSelector(store=>store.authReducer.auth)
    if(!authStatus){
   return <Navigate to="/login" state= "/cart" replace={"true"}/>
    }
    return(
        <div>
children
</div>
    )
}