import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header";
import Watch from "../WatchWindow/Watch";
import Characters from "../HeroInfo/Characters";
import NotFound from "../NotFound/NotFound";

const App = () => {

	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route element={<Header />}>
						<Route path="/" element={<Characters />} />
						<Route path="/movies" element={<Watch />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div >
		</BrowserRouter>
	)
}

export default App;