import { CookiesProvider } from 'react-cookie';
import { ContactsProvider } from '../contexts/ContactsProvider';
import ChatApp from './ChatApp';
import '../styles/styles.css';

function App() {
  return (
    <div className="App">
      <ContactsProvider>
        <ChatApp/>
      </ContactsProvider>
    </div>
  );
}

export default App;
