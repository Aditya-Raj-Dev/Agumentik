import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Toast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Heading } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const Dashboard =()=>{
    const [data,setData]=useState([])
    const [maindata,setMaindata]=useState([])
  

    const fetchUserdetail=()=>{
      axios.get(`http://localhost:8080/lead`)
      .then((r)=>{
        setData(r.data.data)
        setMaindata(r.data.data)
       
      })
    }

   function handlepageChange(p){
     fetchUserdetail(p)
   }

    useEffect(()=>{
        fetchUserdetail()
    },[])

    function handleadmin(contact){
     axios({
      "url":"http://localhost:8080/admin",
      method:"PAtch",
      data:contact
     })
     .then((r)=>{
        alert("sucessfull")
     })
    }

    return (
        <div>
            <Heading as='h2' size='xl'>
              USER DETAILS
            </Heading>
          <br />
       <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead style={{ backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
        <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Name</td>
          <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Contact No</td>
          <td style={{ border: "1px solid #dddddd", padding: "8px" }} 
          >Make Admin</td>
         
        </tr>
      </thead>
      {
        data && data.map((item)=>(
            <tbody key={item._id}>
            <tr>
                <td style={{ border: "1px solid #dddddd", padding: "8px",}}>
                {item.name} </td>
      
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>{item.contact}</td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}><Button
                onClick={()=>handleadmin(item.contact)}
                >Make Admin</Button></td>
    
            </tr>
            </tbody>
        ))
       
      }
    
    </table>
        </div>
    )
}

export default Dashboard