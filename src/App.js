import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';





function App() {
  return (
	<>
  

  <Router>
		<div className="App">
    <Header/>
		<Routes>
				<Route exact path='/' element={< Contact />}></Route>
		</Routes>
		</div>
	</Router>

	<Footer/>
   </>
  );
}

export default App;
