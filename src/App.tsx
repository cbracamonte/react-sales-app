import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Login, NotFound, Product } from "./modules";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/home" element={<Home />} />
					<Route path="/product" element={<Product />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
