import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SendMoney from './pages/SendMoney'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import {Dashboard} from './pages/Dashboard'
import Navbar from './components/ui/Navbar'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>   
      </BrowserRouter> 
    </>
  )
}

export default App