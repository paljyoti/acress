
import './App.css'
import Cards from './components/Cards'
import Cards1 from './components/Cards1'
import Cards2 from './components/Cards2'
import Cards3 from './components/cards3'
import Navbar from './components/Navbar'
import Plots from './components/Plots'
import Search from './components/Search'

function App() {
  

  return (
    <>
     <div>
      <Navbar/>
      <Search/>
      <Cards/>
      <Cards1/>
      <Cards2/>
      <Plots/>
      <Cards3/>
     </div>
    </>
  )
}

export default App
