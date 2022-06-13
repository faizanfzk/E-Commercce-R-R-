import { Box, Heading, Stack, Image, Button,Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux/es/exports";
import { addOrder, deleteProduct } from "../Redux/Products/action";
import { useDispatch } from "react-redux";
import { Checkout } from "../Components/Checkout";

export const Cart = () => {
  const cart=useSelector(store=>store.ecommerceData.cart)
  const dispatch=useDispatch();
 
  const removeProduct=(id)=>{
    dispatch(deleteProduct(id))
  }

  const checkoutHandler=()=>{
    dispatch(addOrder(cart))
  }
  return (
    <Box>
      <Heading as="h2" textAlign="center">
        Cart
        {cart.length && cart.map(item=>{
          return <CartItem key={item.id} id={item.id} title={item.title} price={item.price} 
          description={item.description} image={item.image} 
          removeProduct={removeProduct}/>
        })}
        
      </Heading>
     <Checkout cart={cart} checkoutHandler={checkoutHandler}/>
    </Box>
  );
};
function CartItem({id,image,title,description,price,removeProduct}) {
  return (
    <Box
      border={"1px solid red"}
      rounded="lg"
      width={"fit-content"}
      margin="auto"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height={"300px"}
          width={"300px"}
          border={"1px solid blue"}
          position="relative"
          padding="0 1rem"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "80%",
            h: "80%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
        >
          <Image
            rounded={"lg"}
            height={300}
            width={300}
            objectFit={"contain"}
            src={image
            }
          />
        </Box>
        <Box height={"300px"} width={"300px"} border={"1px solid blue"}>
          <Stack>
            <Heading as="h3" size="lg">
              {title}
            </Heading>


            <Text fontSize={"sm"} overflow={"hidden"} whiteSpace="nowrap" >
              {description}
              {console.log(description)}
  
            </Text>
            <Text
                color='gray.900'
                fontWeight={300}
                fontSize={'2xl'}>
               ₹ {price}
              </Text>
              <Button variant={"solid"} leftIcon={<DeleteIcon/>} onClick={()=>removeProduct(id)}>Remove</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
