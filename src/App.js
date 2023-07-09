import './App.css';
import LoginForm from './components/LoginForm';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';


function App() {
  if (!localStorage.getItem('username')) return <LoginForm />




  return (
    <ChatEngine 
        height = "100vh"
        projectID = "764a8fc6-96c4-456a-a08c-511e12ea301c"
        userName = {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/> }
    
    />
  );
}

export default App;
