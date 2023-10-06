import {FC, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import './ContactForm.css'
import user2 from '../assets/user (2).png'

const ContactForm : FC = () => {

  const [Contact, setContact] = useState({
    firstName : '',
    Gender : '',
    Birth : '',
    Phone : '',
    Email : ''
  })

console.log(Contact.firstName)
  //update state
  const handleOnChange = (event) =>{
    const {name, value} = event.target
    setContact((prevState) => {
        return {
          ...prevState,
          [name] : value
        }


    })
  }

  return (
    
    <Form className='contact-form'>
      
      <Form.Group controlId='firstName'>
        <Form.Label>ชื่อ-นามสกุล  </Form.Label>
        <Form.Control
            className='firstName'
            name= 'firstName'
            value={Contact.firstName}
            type='text'
            onChange={handleOnChange}/>

      </Form.Group>
      <br />
      <Form.Group controlId='Gender'>
        <Form.Label>เพศ </Form.Label>
        <Form.Control
            className='Gender'
            name= 'Gender'
            value={Contact.Gender}
            type='text'
            onChange={handleOnChange}/>

      </Form.Group>
      <br />
      <Form.Group controlId='Birth'>
        <Form.Label>วันเกิด </Form.Label>
        <Form.Control
            className='Birth'
            name= 'Birth'
            value={Contact.Birth}
            type='text'
            onChange={handleOnChange}/>

      </Form.Group>
      <br />
      <Form.Group controlId='Phone'>
        <Form.Label>เบอร์โทร</Form.Label>
        <Form.Control
            className='Phone'
            name= 'Phone'
            value={Contact.Phone}
            type='text'
            onChange={handleOnChange}/>

      </Form.Group>
      <br />
      <Form.Group controlId='Email'>
        <Form.Label>email</Form.Label>
        <Form.Control
            className='Email'
            name= 'Email'
            value={Contact.Email}
            type='text'
            onChange={handleOnChange}/>

      </Form.Group>
      <div className='user'>
        <img src={user2} alt="user2" />
      </div>
      
    </Form>
    
  )
}

export default ContactForm;