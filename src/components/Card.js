import React, { Component } from 'react';
import ForecastList from './ForecastList';


export class Card extends Component {

	 constructor(props) {
        super(props);
        this.state = {
        	name: this.props.name,
        	country: this.props.country,
        	key: this.props.id
        }
    }

	 render() { 
	    return (
	    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
			<div>
			    <ForecastList id={this.state.key} />
			  	<h2>{this.state.name}</h2>
			  	<p>{this.state.country}</p>

			</div>
		</div>
	    );
	}
}

export default Card;
