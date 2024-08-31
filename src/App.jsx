
import './App.css'
import Header from './Components/Home/Header'
import Navbar from './Components/Home/Navbar'
import Login from './Components/Home/Login'
import Imageslider from './Components/Home/Imageslider'
import VotionButton from './Components/Main/VotingPortal'
function App() {


  return (
    <>
    <div>
      <Header/>
      <Navbar/>
      <Login></Login>
<Imageslider></Imageslider>
<VotionButton/>
    </div>
    
    </>
  )
}

export default App

