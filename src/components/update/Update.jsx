import React, { useState,useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

function Update() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID,setID]=useState(null);
  const sendDataToAPI = () => {
    axios.put(`https://63c12ad071656267187437a7.mockapi.io/crud/${ID}`, {
      firstName,
      lastName
    })
    .then(() => {
      navigate('/');
    })
  }

  useEffect(()=>{
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setID(localStorage.getItem('ID'));
  }, [])

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name='fname' value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name='lname' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>

        <Button primary type='submit' onClick={sendDataToAPI}>Submit</Button>
        <Button primary>
          <Link to='/' style={{ color: '#FFF' }}>Cancel</Link>
        </Button>
      </Form>
    </div>
  )
}

export default Update