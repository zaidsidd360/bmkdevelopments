import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceRoute from "./pages/ServiceRoute";

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
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
