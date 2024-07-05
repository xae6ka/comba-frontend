import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Shop from './Pages/Shop/Shop';
import Basket from './Pages/Basket/Basket';
import { Route, Routes } from 'react-router-dom';

import './css/index.css';

function App() {
  return (
    <div className="App">
      <Header />


      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/basket" element={<Basket />} />\
      </Routes>
    </div>
  );
}

export default App;
