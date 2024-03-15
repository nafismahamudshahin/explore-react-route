import './App.css'
import DaisyCarousel from './component/DaisyCarousel'
import DaisyChatBot from './component/DaisyChatBot'
import DaisyNav from './component/DaisyNav'
import NavBar from './component/NavBar'

function App() {
  return (
    <div>
      <DaisyNav />
      <NavBar/>
      <DaisyCarousel/>
      <DaisyChatBot/>
    </div>
  )
}

export default App
