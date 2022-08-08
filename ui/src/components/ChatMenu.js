import react, { useState } from 'react';
import { Tab, Nav, Modal, Form, Button } from 'react-bootstrap';

const CHATS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function ChatMenu({setMenuState}){
    const [activeKey, setActiveKey] = useState(CHATS_KEY);

    return(
        <>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs'>
                    <Nav.Item>
                        <Nav.Link eventKey={CHATS_KEY}>Chats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey={CHATS_KEY}>
                        <br/>
                        <Button onClick={() => setMenuState('Chats')}>Chats</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <br/>
                        <Button onClick={() => setMenuState('Contacts')}>Contacts</Button>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </>
    )
}