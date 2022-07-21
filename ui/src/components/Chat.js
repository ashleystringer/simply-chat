import { useConversations } from '../contexts/ConversationsProvider';
import ContactModal from './ContactModal';
import ConversationModal from './ConversationModal';
import {} from 'react-bootstrap';


export default function Chat(){


    const chatMenu = (
        <div></div>
    );

    const chatMain = (
        <div></div>
    );

    return(
        <>
            <div class='chat-container'>
                <div class='chat-menu'>
                    Chat Menu
                </div>
                <div class='chat-main'>
                    Chat Main
                </div>
            </div>
            <form>
                <input type='text' class='message-field'/>
                <input type='submit' />
            </form>
        </>
    );
}