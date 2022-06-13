import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSelector ,useDispatch } from "react-redux"
import { fetchCart } from "../Redux/Products/action"


export const CartCount=()=>{
const cart=useSelector(store=>store.ecommerceData.cart)
const dispatch=useDispatch()

useEffect(()=>{
    if(cart?.length===0){
        dispatch(fetchCart())
    }
},[cart?.length,dispatch])

    return(
      <Box backgroundColor="black"
      textColor="white"
      borderRadius="50%"
      width="20px"
      height="20px"
      textAlign="center"
      paddingBottom="20px"
      right="0px"
      top="0px"
      position="absolute"
      >
        {cart?.length ? cart.length : 0}
      </Box>
    )
}