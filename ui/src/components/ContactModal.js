import { Modal, Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { useContacts } from '../contexts/ContactsProvider';
import axios from 'axios';

export default function ContactModal(){

    //const contacts = useContacts();

    const contactIdRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        const contact = contactIdRef.current.value;

        console.log(`contactIdRef: ${contactIdRef.current.value}`);
        //closeModal();

        const data = {
            contact
        };

        axios.post(`http://localhost:5000/auth/user`, data,  { withCredentials: true })
            .then(data => {
                console.log('then');
            })
            .catch(err => {
                console.log(`error: ${err}`);
        })
    }

    const modal = (
        <>
            <Modal.Header>Add Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ID:</Form.Label>
                        <Form.Control ref={contactIdRef}></Form.Control>
                    </Form.Group>
                    <Button type='submit'>Add Contact</Button>
                </Form>   
            </Modal.Body>
        </>
    );

    return(
       modal
    );
}