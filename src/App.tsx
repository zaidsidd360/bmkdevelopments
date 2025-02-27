import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceRoute from "./pages/ServiceRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import AboutN from "./pages/AboutN";

function App() {
	return (
		<>
			<div className="overflow-x-hidden">
				<BrowserRouter>
					<ScrollToTopButton />
					<ScrollToTop />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/services/:service"
							element={<ServiceRoute />}
						/>
						<Route path="/about" element={<AboutN />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<FloatingContact />
					<FloatingWhatsapp />
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
