import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<ScrollToTopButton />
					<ScrollToTop />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
