import React, { Component } from 'react';
import { connect } from "react-redux";

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" className="search-input" 
                    onChange={this.props.handleChange} 
                    placeholder="Search"
                />
                <i className="fa fa-search fa-2x"></i>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange(event) {
            dispatch({type: "SEARCH", search: event.target.value})
        }
    }
}

export default connect(null, mapDispatchToProps)(Search);