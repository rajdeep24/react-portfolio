import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/blog" component={Blog} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
