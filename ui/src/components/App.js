import { CookiesProvider } from 'react-cookie';
import ChatApp from './ChatApp';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <ChatApp/>
      </CookiesProvider>
    </div>
  );
}

export default App;
