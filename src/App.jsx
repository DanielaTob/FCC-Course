import './App.css'
import Counter from './components/Counter'
import Testimonio from './components/Testimonio'


function App() {

  return (
    <div>

    <div className="App-container">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>

    <div>
      <Counter />
    </div>

    
    </div>
  )
}

export default App
