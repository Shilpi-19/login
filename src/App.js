import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;