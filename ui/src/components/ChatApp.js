import Login from './Login';
import Register from './Register';
import { SocketProvider } from '../contexts/SocketProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider'; 
import { useCookies } from 'react-cookie';

function ChatApp() {
    const [cookies] = useCookies(['token']);
    const test = document.cookie;
    console.log(test);

    console.log(`cookies.token: ${cookies.token}`);

    const dashboard = (
        <div className="App">
            <SocketProvider>
                <ConversationsProvider>
                </ConversationsProvider>
            </SocketProvider>
        </div>
    );

    return (
        cookies.token ? dashboard : <Login/>
      );
}

export default ChatApp;
