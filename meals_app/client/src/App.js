import './App.css';
import Header from './header';
import MealsCards from './mealsCards';
import Navbar from './navbar';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
     <MealsCards/>
  
    </div>
  );
}


export default App;
