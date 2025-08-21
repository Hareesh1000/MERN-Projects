
import './App.css';
import Home from './Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import AppRouter from './AppRouter';
import { BrowserRouter } from "react-router";



function App() {
  return (
    // <div className="App">
    // </div>
    <BrowserRouter> 
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
