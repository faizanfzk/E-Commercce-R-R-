import {
  Menu,
  MenuButton,
  MenuList,
 Link,
  Flex,
  Button,
  Avatar
} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom"

export const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}> <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></MenuButton>
        <MenuList zIndex={"1000"}>
          <MenuList>Cart</MenuList>
          <MenuList>Your Orders</MenuList>
          <MenuList>Login</MenuList>
          <MenuList >Logout</MenuList>
        </MenuList>
      </Menu>
    </Flex>
  );
};
