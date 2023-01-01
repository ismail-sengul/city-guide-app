import './css/style.css';
import { AppNavbar } from './components/AppNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from './components/Homepage';
import { AppFooter } from './components/AppFooter';

export const notImplementedYet = () => alert("This Page Is Not Implemented Yet");

function App() {

  return (
    <div>
      <AppNavbar />
      <Router>
        <Routes>
            <Route path='/' element={<Homepage/>} exact/>
        </Routes>
      </Router>
      <AppFooter/>
    </div>  
  );
}

export default App;
