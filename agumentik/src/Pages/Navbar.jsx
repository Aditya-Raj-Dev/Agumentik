import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import ManualClose from './Signup'
import {BsFacebook} from "react-icons/bs"
const Navbar = () => {
  return (
    <Flex justifyContent="space-between" 
    padding="10px"
    bg="teal.100">
        <img src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="" height="30px" width="30px"/>
       <BsFacebook fontSize="40px"/>
       <BsFacebook fontSize="40px"/>
       <Button  colorScheme="blue"><ManualClose/></Button>
    </Flex>
  )
}

export default Navbar