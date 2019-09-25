import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddBoard extends Component {
    constructor(props) {
        super(props);
        this.refUrl = React.createRef();
    }

    handleSubmitUrl = () => {
        const url = this.refUrl.current.value;
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ url })
        };

        fetch("/api/urls", options)
        .then(res => res.json())
        .then(data => {
            if (!data.err) {
                this.props.dispatch({type: "ADD_DATA", data});
                this.props.handleCloseAdd();
            }
        });
    }

    render() {
        return (
            <div className="add-board" onClick={this.props.handleCloseAdd}>
                <div className="add-form" onClick={(e) => {e.stopPropagation()}}>
                    <h1 className="title">Input your link</h1>
                    <div className="form">
                        <input ref={this.refUrl} type="text" className="form-input" />
                        <button className="form-submit" 
                            onClick={this.handleSubmitUrl}
                        >Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDisptachToProps(dispatch) {
    return {
        handleCloseAdd() {
            dispatch({type: "CHANGE_ADD_STATUS"});
        },
        dispatch(action) {
            dispatch(action);
        }
    }
}

export default connect(null, mapDisptachToProps)(AddBoard);