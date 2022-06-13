import { Box, Heading } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ProductSimple } from "../Components/ProductSImple";
import { fetchOrders } from "../Redux/Products/action";


export const Orders=()=>{
    const orders=useSelector(store=>store.ecommerceData.orders)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchOrders())

    },[dispatch])
    
    return(
      <Box>
        <Heading as="h2" size="xl" textAlign={"center"}>
            Your's Orders
        </Heading>
        <Box>
            {orders.map(item=>{
               return(<ProductSimple key={item.id}
               image={item.image} title={item.title}
               price={item.price}/>)
            })}
        </Box>
      </Box>
    )
}