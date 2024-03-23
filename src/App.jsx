import './App.css'
import NavBar from './component/NavBar'
import PriceOpctions from './component/PriceOpctions'
// import DaisyCarousel from './component/DaisyCarousel'
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar/>
      {/* <DaisyCarousel /> */}
      <PriceOpctions/>
    </div>
  )
}

export default App
