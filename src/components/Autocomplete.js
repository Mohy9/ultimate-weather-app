import React, { Component } from 'react';
import Card from './Card';

// source of inspiration
//https://programmingwithmosh.com/react/simple-react-autocomplete-component/

export class Autocomplete extends Component {
    
    // Autocomplete component will use these states to suggest if the input phrase matches.
    constructor(props) {
        super(props);
        this.state = {
            filteredCities: [],
            showSuggestions: false,
            userInput: '',
            showResult: false,
            resultCity: {}
        };
    }

    //define defaultProperty with suggestions as an empty array
    // vytknuti abych nepsal this.props.cities
    static defaultProperty = {
        cities: []
    };
    // event is working with argument e
    onChange = e => {
        const { cities } = this.props;
        const userInput = e.currentTarget.value;
        
        // test if onChange event is working
        // for (var i = 0; i < cities.length; i++) {
        //     let result = cities[i].toLowerCase().indexOf(userInput.toLowerCase()) > -1
        //     console.log(cities[i], result, userInput)
        // }
   
        // filter - javascript funkce prohledavajici pole a dle podminky filtruje konkretni prvky pole
        const filteredCities = cities.filter(
            city =>
            // tolowercase funkce meni vse na male pismena 
            // indexof potvrzuje pritomnost podslova v prohledavanem slove (-1 znamena, ze poslovo v prohledavanem slove neni; najdi si dokumentaci k indexof)
            city.EnglishName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            filteredCities,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            showResult: false
        });
    };
    // event on Click
    onClick = e => {
         const  userInput = e.currentTarget.innerText;
         const finalResult = this.state.filteredCities.filter(
            city =>
            city.EnglishName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            filteredCities: [],
            showSuggestions: false,
            userInput: userInput,
            showResult: true,
            resultCity: finalResult[0]
        });
    };

    render() {  
         return (
            <div>
                <input
                  type="search"
                  onChange={this.onChange}
                  value={this.state.userInput}
                />
                {(this.state.showSuggestions && this.state.userInput) && (
                this.state.filteredCities.length > 0 ? (
                    <ul className="suggestions">
                         {this.state.filteredCities.map(city =>
                          <li key={city.EnglishName} onClick={this.onClick}>
                             {city.EnglishName}
                           </li>
                                         )}
                    </ul>
                    )
                    : (
                        <div className="no-suggestions">
                            <em>No suggestions</em>
                        </div>
                        )
                    )
                    }
                    {(this.state.showResult) && 
                        <div id ="card">
                            <Card 
                            id={this.state.resultCity.Key}
                            name={this.state.resultCity.EnglishName} 
                            country={this.state.resultCity.Country.EnglishName}
                            />
                        </div>
                        }
                
            </div>
        );
    }
}

export default Autocomplete;