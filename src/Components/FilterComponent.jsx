import { Box, Text,Checkbox ,CheckboxGroup,VStack} from "@chakra-ui/react"
import { useState , useEffect} from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  
  MenuItemOption,
 
  Button,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {useSearchParams} from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchData } from "../Redux/Products/action"

export const FilterComponents=()=>{
  const [searchParams,setSearchParams]=useSearchParams()
const [categoryValues,setCategoryValues]=useState(searchParams.getAll("category") || [])
const dispatch=useDispatch()

    const categoryHandler=(values)=>{
        console.log(values)
            setCategoryValues(values)
    }

    useEffect(() => {
      if(categoryValues){
        setSearchParams({category:categoryValues}, {replace:true})
        let params={
          category:searchParams.getAll("category")
        }
        dispatch(fetchData(params))
      }
    }, [setSearchParams,categoryValues,searchParams])
    return(
      <Box>
          <Box display={{base:"none",md:"block"}} p="1rem 2rem">
              <Text fontSize="2xl">Filter</Text>
              <Text>Category</Text>
              <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"}>
    <Checkbox value="men's clothing">Men's Clothing</Checkbox>
    <Checkbox value="women's clothing">Women's Clothing</Checkbox>
    <Checkbox value='jewelery'>Jewellery</Checkbox>
    <Checkbox value='electronics'>Electronics</Checkbox>
    <Checkbox value='bags'>Bags</Checkbox>


  </VStack>
</CheckboxGroup>
          </Box>
<Box display={{base:"block" , md :"none"}} p="0rem 2rem">
<Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
</Box>

      </Box>
    )
}