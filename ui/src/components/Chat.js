import { useConversations } from '../contexts/ConversationsProvider';
import ContactModal from './ContactModal';
import ConversationModal from './ConversationModal';

export default function Chat(){
    return(
        <div>
            <ContactModal/>
        </div>
    );
}