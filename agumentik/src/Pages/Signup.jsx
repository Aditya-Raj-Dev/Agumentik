import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel
  } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
export default function ManualClose() {
    const toast=useToast()
    const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        gender:""
      })

      function handlechange(e){
        const {name,value}=e.target;
   
        setData({
         ...data,
         [name]:value
        })
       }

       function handlesubmit(){
        axios({
          url:"http://localhost:8080/signup",
          method:"POST",
          data:data
        })
        .then((r)=>{
            if(r.data.user.role==="admin"){
            toast({
                        title: `${r.data.msg}`,
                        description: "welcome to the dashboard",
                        status:`${r.data.toast}`==="i"?"info":"success",
                        duration: 2000,
                        position:"top",
                        isClosable: true,
                    })
                    navigate("/dashboard")
            }
            else if(r.data.user.role==="user"){
                toast({
                    title: `You are not admin`,
                    description: "only for admin",
                    status:"info",
                    duration: 2000,
                    position:"top",
                    isClosable: true,
                })

            }
            else{
                toast({
                    title: `${r.data.msg}`,
                    description: "",
                    status:`${r.data.toast}`==="i"?"info":"success",
                    duration: 2000,
                    position:"top",
                    isClosable: true,
                })
            }
       
        console.log(r.data)
        })
      }
  
    return (
      <>
        <Button onClick={onOpen} colorScheme="blue">Admin Signup</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel> Name</FormLabel>
                <Input  placeholder='Name' onChange={handlechange} name="name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email'onChange={handlechange} name="email"/>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input  placeholder='Password' onChange={handlechange} name="password" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Input placeholder='gender'onChange={handlechange} name="gender"/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}  onClick={handlesubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }