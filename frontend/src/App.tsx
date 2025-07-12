import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserPage from './components/UserPage';

function App() {

  return (
    <Routes>
     <Route path='/' element={<LoginPage/>}/>
     <Route path='/signUp' element={<SignUpPage/>}/>
     <Route path='/userPage' element={<UserPage/>}/>
    </Routes>
  )
}

export default App
