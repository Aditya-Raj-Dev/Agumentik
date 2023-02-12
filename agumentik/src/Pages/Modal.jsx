import React, { useEffect, useState } from "react"
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
    Input,
    FormControl,
    FormLabel
  } from '@chakra-ui/react'
import axios from "axios"
import { useToast } from '@chakra-ui/react'
export default function InitialFocus() {
  const toast=useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState({
      name:"",
      contact:""
    })
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    useEffect(()=>{
  onOpen()
    },[])
   
    function handlechange(e){
     const {name,value}=e.target;

     setData({
      ...data,
      [name]:value
     })
    }

    function handlesubmit(){
      axios({
        url:"http://localhost:8080/lead",
        method:"POST",
        data:data
      })
      .then((r)=>{
        toast({
          title: `${r.data.msg}`,
          description: "",
          status:`${r.data.toast}`==="i"?"info":"success",
          duration: 2000,
          position:"top",
          isClosable: true,
        })
      })
    }
    return (
      <>
        
       
        <Modal
         
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Fill the Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> Name</FormLabel>
                <Input  placeholder='Name' onChange={handlechange} name="name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Contact Number</FormLabel>
                <Input placeholder='Contact Number'onChange={handlechange} name="contact"/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handlesubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }