import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Button,
    useColorModeValue,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Image,
    Flex,
    Text
  } from '@chakra-ui/react'

export const Checkout=({cart,checkoutHandler})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box>
           <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={onOpen}
              
              
              >
            Checkout
            </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {cart.map(item=>{
                return(
                    <Box key={item.id}>
                        <Flex>
                            <Box>
                                <Image borer={"1px solid black"} rounded="lg" src={item.image} objectFit={"contain"} alt="product image" boxSize={"100px"}/>
                            </Box>
                            <Box>
                            <Text fontSize={"lg"}>{item.title}</Text>
                            </Box>
                        </Flex>
                    </Box>
                )
            })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={checkoutHandler}>
                Confirm
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
    )
  }