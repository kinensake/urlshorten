import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import Search from './Search';
import AddBoard from './AddBoard';

class CardBoard extends Component {
    render() {
        return (
            <div className="card-board">
                <Search/>
                <CardList />
                {this.props.isAddShow ? <AddBoard /> : null}
                <div className="btn-add" onClick={this.props.handleAddClick}>+</div>
            </div>
        );
    }

    componentDidMount(){
        fetch("/api/urls")
        .then(res => res.json())
        .then(data => {
            if(!data.err) {
                return this.props.dispatch({type: "IMPORT_DATA", data});
            }
            this.props.history.push("/");
        })
    }
}

function mapDisptachToProps(dispatch) {
    return {
        handleAddClick() {
            dispatch({type: "CHANGE_ADD_STATUS"});
        },
        dispatch(action) {
            dispatch(action);
        }
    }
}

function mapStateToProps(state) {
    return {
        isAddShow: state.isAddShow
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(CardBoard);