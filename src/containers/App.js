import React, {Component} from 'react';
import './App.css';
import Autocomplete from '../components/Autocomplete';
import getCities from '../api/Api';

//virtual DOM, collecting states as cities and searchfields
class App extends Component {
	constructor(){
		super()
		this.state={
		cities: [],
		searchfield:''
		}
	}

// more info https://reactjs.org/docs/react-component.html
	componentDidMount(){
		getCities()
		.then(cities => this.setState({cities: cities }));
	}



//listening to the event and with every change runs the function
  onSearchChange = (event) => {
  	this.setState({ searchfield: event.target.value})
     }


//rendering cards with cities
  render(){
	// loading in slow connection scenario - just comment componentDidMount function for test
	// if (this.state.cities.length === 0){
	// 	return <h1> Loading </h1>
	// } else {
	return(
	<div className='tc'>
		<h1 className='f1'>Weather App</h1>
		<Autocomplete className='pa3 ba b--green bg-lightest-blue' 
					  cities={this.state.cities} />
		
	</div>
		);
		// }
	}
}






export default App;