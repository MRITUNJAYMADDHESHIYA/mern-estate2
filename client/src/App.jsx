import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
    <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
    <Route path='/profile' element={<Profile></Profile>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App
