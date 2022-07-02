import Login from './Login';
import Register from './Register';
import { SocketProvider } from '../contexts/SocketProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

const dashboard = (
  <div>
      <SocketProvider>
        <ConversationsProvider>
          <Login/>
          <Register/>
        </ConversationsProvider>
      </SocketProvider>
  </div>
);

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <ConversationsProvider>
          <Login/>
          <Register/>
        </ConversationsProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
