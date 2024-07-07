import { } from 'antd/es/layout/layout';
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Signin';
import Home from './Home';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Signup/>}/>
      <Route path={'/signin'} element={<Signin/>}/>
      <Route path={'/home'} element={<Home/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
