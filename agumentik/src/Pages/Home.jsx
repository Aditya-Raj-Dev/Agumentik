import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Flex, Image,Heading } from '@chakra-ui/react'
import InitialFocus from './Modal'
import {BsFacebook} from "react-icons/bs"
const Home = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
      axios.get("http://localhost:8080/data")
      .then((r)=>{
        setData(r.data.data)
      })
    },[])
    console.log(data)
  return (
    <div style={{width:"90%",margin:"auto"}}>
        <InitialFocus/>
        {
            data && data.map((item)=>(
                <div key={item._id}>
                 <Image src={item.topposter} marginBottom="7rem"/>
                    {
                    item.topheading.map((item,i)=>(
                           <Flex key={i} style={{margin:"auto",width:"40%",gap:"20px",marginBottom:"10px"}}>
                           <Heading as='h2' size='3xl'>
                                {item.head}
                            </Heading>
                            <p style={{paddingTop:"25px"}}>{item.description}</p>
                           </Flex>
                    ))
                    }
                     <Heading as='h2' size='3xl' noOfLines={1} marginTop="7rem">
                     “
                    </Heading>
                    <Heading as='h2' size='2xl'  marginTop="7rem" width="60%" margin="auto">
                      {item.midheading.content}
                    </Heading>
                    <br />
                    <Heading as='h2' size='md'  marginTop="7rem" width="60%" margin="auto">
                      {item.midheading.name}
                    </Heading>
                    <br />
                    <Flex gap="10px" margin="auto" width="30%" justifyContent="center" marginBottom="80px">
                    {
                    item.midheading.img.map((item)=>(
                        <img src={item} style={{borderRadius:"50px",height:"40px",width:"40px"}}/>
                    ))
                    }
                  </Flex>
                  <Image src={item.midposter} marginBottom="6rem"/>
                  <Heading as='h2' size='2xl'  width="30%" margin="auto">
                      {item.lowheading}
                    </Heading>
                    <br />
                    <br />
                    <Flex gap="30px">
                    {
                        item.lowimage.map((item)=>(
                            <Image src={item} height="200px" width="15%" />
                        ))
                    }
                   </Flex>
                </div>
            ))
        }  
        
    </div>
  )
}

export default Home