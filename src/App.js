import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Hello from "./comps/Hello/Hello";
import About from "./comps/About/About";
import Skills from "./comps/Skills/Skills";
import Projects from "./comps/Projects/Projects";
import Contact from "./comps/Contact/Contact";
import Footer from "./comps/Footer/Fotter";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Hello/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/skills" element={<Skills/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/contacts" element={<Contact/>}></Route>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
