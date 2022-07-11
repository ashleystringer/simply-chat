import { Modal, Button, Form } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

export default function ConversationModal(){

    function handleSubmit(e){
        e.preventDefault();

    }

    const modal = (
        <>
            <Modal.Header>Conversations</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ID:</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Button type='submit'>Add Contact</Button>
                </Form>   
            </Modal.Body>
        </>
    );



    return(
       <div>ConversationModal</div>
    );
}