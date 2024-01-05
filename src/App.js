import './App.css';
import Mensaje from './Mensaje';


const Decription = () => {
  return <p>Esta es la app del curso fullStack bootcamp</p>
}

function App() {

  return (
    <div className="App">
    <h1>Titulo de la App</h1>
    <Mensaje color='red' message='estamos trabajando' />
    <Mensaje color='blue' message='en un curso'/>
    <Mensaje color = 'yellow' message='de react'/>
    <Decription/>
    </div>
  )
}

export default App;
