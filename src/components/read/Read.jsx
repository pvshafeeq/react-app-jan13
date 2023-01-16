import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function Read() {
    const [apiData,setApiData]=useState([]);
    useEffect(()=>{
        axios.get('https://63c12ad071656267187437a7.mockapi.io/crud')
        .then((getData)=>{
            setApiData(getData.data);
        })
    },[])

    const setData =(id,firstName, lastName)=>{
      console.log(id);
      console.log(firstName);
      localStorage.setItem('ID',id);
      localStorage.setItem('firstName',firstName);
      localStorage.setItem('lastName', lastName);
    }

    const getData = () => {
      axios.get('https://63c12ad071656267187437a7.mockapi.io/crud')
          .then((getData) => {
              setApiData(getData.data);
          })
  }

const onDelete = (id) =>{
  axios.delete(`https://63c12ad071656267187437a7.mockapi.io/crud/${id}`)
  .then(() => {
    getData();
  })
}

  return (
    <div>
      <Button primary>
   <Link to='/create' style={{ color: '#FFF' }}>Add New</Link>
        </Button>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data)=>{
 return (
  <Table.Row>
 <Table.Cell>{data.id}</Table.Cell>
   <Table.Cell>{data.firstName}</Table.Cell>
   <Table.Cell>{data.lastName}</Table.Cell>
   <Table.Cell>
    <Link to='/update'>
    <Button color='green' onClick={()=>setData(data.id, data.firstName, data.lastName)}>Update</Button>
    </Link>
    </Table.Cell>
   <Table.Cell>
   {/* <Link to='/delete'> */}
    <Button color='red' onClick={() => onDelete(data.id)}>Delete</Button>
    {/* </Link> */}
    </Table.Cell>
 </Table.Row>
 ) 
        })}
    </Table.Body>
  </Table>
    </div>
  )
}

