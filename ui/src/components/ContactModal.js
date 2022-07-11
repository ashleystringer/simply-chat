import { Modal, Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { useContacts } from '../contexts/ContactsProvider';

export default function ContactModal(){

    //const contacts = useContacts();

    const contactIdRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        console.log(`contactIdRef: ${contactIdRef.current.value}`);
        //closeModal();
    }

    const modal = (
        <>
            <Modal.Header>Contact</Modal.Header>
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