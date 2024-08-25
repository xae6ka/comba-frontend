import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Shop from './Pages/Shop/Shop';
import Basket from './Pages/Basket/Basket';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Reg from './Pages/Reg/Reg';
import { Route, Routes } from 'react-router-dom';

import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './css/index.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
      
      <ReactNotifications />
    </div>
  );
}

export default App;
