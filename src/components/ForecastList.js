import React, { Component } from 'react';
import {getForecast} from '../api/Api';

export class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	key: this.props.id,
        	forecasts: []
        };     
    }
    	componentDidMount(){
		getForecast(this.state.key)
		.then(forecasts => this.setState({forecasts: forecasts.DailyForecasts }));
	}
        // function converts fahrenheits to celsius
		celciusConverter(degree) {
	    const c = (parseInt(degree) - 32) * 5 / 9;
	    return c.toFixed();
	  }

    render(){
    	return(
    		<div className = "forecasts">
    			{ this.state.forecasts.map(forecast => {
    				const date = new Date(forecast.Date);
    				const min = this.celciusConverter(forecast.Temperature.Minimum.Value);
        			const max = this.celciusConverter(forecast.Temperature.Maximum.Value);
				return (
		    		<div className= "forecastItem">
		    		<h1>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `}</h1>
		    		<h1>max {max} °</h1>
		    		<h1>min {min} °</h1>
		    		</div>
		    		)})
				}
		    </div>
    		)
    }

}


export default ForecastList;