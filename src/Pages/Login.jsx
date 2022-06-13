import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { signIn } from "../Redux/Auth/action";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, useLocation } from "react-router-dom";
export const Login = () => {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const authStatus = useSelector((store) => store.authReducer.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const dispatch = useDispatch();
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(useremail, userpassword);
    dispatch(signIn({ email: useremail, password: userpassword }));
  };
  useEffect(() => {
    if (location?.state && authStatus) {
      navigate(location.state, { replace: true });
    }
  }, [location?.state, navigate, authStatus]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={submitHandler}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={useremail}
                  onChange={handleUserEmail}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={userpassword}
                  onChange={handlePassword}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
