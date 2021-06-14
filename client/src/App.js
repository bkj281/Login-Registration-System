import { Navbar } from 'react-bootstrap';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { Component } from 'react';

class App extends Component {

	constructor() {
		super();

		this.state = {
			user: {}
		};

		this.handleData = this.handleData.bind(this);

	}

	handleData = (e) => {
		this.setState({ user: e })
	}

	render() {
	return (
		<Router>
    		<div className="App">
				<Navbar bg="primary" variant="dark">
                    <div className="container">
        		  		<Link className="navbar-brand" to={"/sign-in"}>Dashboard</Link>
        		  		<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        		    		<ul className="navbar-nav ml-auto">
        		      			<li className="nav-item">
        		        			<Link className="nav-link" to={"/sign-in"}>Sign In</Link>
        		      			</li>
        		    		  	<li className="nav-item">
        		        			<Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
        		      			</li>
        		    		</ul>
        		  		</div>
        			</div>
				</Navbar>
    		</div>
			<div className="outer">
        		<div className="inner">
        	  		<Switch>
        	    		<Route exact path='/' component={Login} />
        	    		<Route path="/sign-in" component={Login}/>
        	    		<Route path="/sign-up" component={Register} />
						<Route path="/profile" component={Dashboard} />
        			</Switch>
					
        		</div>
      		</div>
		</Router>
	);
}
}

export default App;