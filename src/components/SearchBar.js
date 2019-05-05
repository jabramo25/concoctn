
import React from 'react';
import _ from "lodash";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount() {
        this.searchInputId = "searchInput_" + _.uniqueId();
    }
    calculateTimeOfDay() {
        let currentHours = new Date().getHours;

        if (currentHours < 10) {
            return "It's morning, here's some breakfast ideas";
        } else if (currentHours < 17) {
            return "It's afternoon, here's some lunch ideas";
        } else {
            return "It's evening, here's some dinner ideas";
        }

    }
    render() {
        return (
            <div className="search-component" id={this.props.searchId}>
                <label htmlFor={this.searchInputId}>{this.props.searchLabel}</label>
                <input id={this.searchInputId} type="text" placeholder="Search Recipes...">                    
                </input> 
            </div>
        )
    }
}

export default SearchBar;