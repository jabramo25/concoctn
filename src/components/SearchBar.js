
import React from 'react';
import _ from "lodash";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount() {
        this.searchInputId = "searchInput_" + _.uniqueId();
    }
    render() {
        return (
            <div className="search-component" id={this.props.searchId}>
                <label htmlFor={this.searchInputId}>{this.props.searchLabel}</label>
                <input id={this.searchInputId} type="text" placeholder="Search Recipes..."></input> 
            </div>
        )
    }
}

export default SearchBar;