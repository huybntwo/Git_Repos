
import './App.css';
import Login from './components/Login';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ChatRoom from './components/ChatRoom'
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './components/Modal/AddRoomModal';
import InviteMembersModal from './components/Modal/InviteMembersModal';

function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <AppProvider>
        <Routes>
            <Route element={<Login/>} path="/login"></Route>
            <Route element={<ChatRoom/>} path="/"></Route>
        </Routes>
        <AddRoomModal/>
        <InviteMembersModal/>
      </AppProvider>
    </AuthProvider>
  </BrowserRouter>
  ) ;
}

export default App;
