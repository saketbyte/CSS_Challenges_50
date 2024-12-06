import Navbar from "./components/Navbar";
import Paintings from "./Pages/Paintings";
import Home from "./Pages/Home";
import Museum from "./Pages/Museum";
import Letters from "./Pages/Letters";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Museum' element={<Museum />} />
					<Route path='/Letters' element={<Letters />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Paintings' element={<Paintings />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
