import React, { Component } from 'react';
import { connect } from 'react-redux';

class UrlCard extends Component {
    
    // static defaultProps = {
    //     orginUrl: "https://sample.com/",
    //     shortUrl: "https://url.io/",
    //     isActive: true
    // }

    render() {
        return (
            <div className="url-box" id={this.props.id}>
                <div className="url-text">
                    <h2>{this.props.originUrl}</h2>
                    <h3>
                        <a href={this.props.shortenedUrl} rel="noopener noreferrer" 
                            target="_blank" className="url-link"
                        >
                            {this.props.shortenedUrl}
                        </a>
                    </h3>
                </div>
                <div className="url-tool">
                    <input type="checkbox" className="url-status" 
                        defaultChecked={this.props.active} 
                        onClick={(e) => this.props.handleChangeActive(this.props.id, e)}
                    />
                    <span className="delete-btn">
                        <i className="fa fa-trash-o fa-2x" 
                            onClick={() => this.props.handleDeleteUrl(this.props.id)}
                        ></i>
                    </span>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleDeleteUrl(id) {
            const options = {
                method: "DELETE",
            };
            dispatch({type: "DELETE_DATA", id});

            fetch(`/api/urls/${id}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        },

        handleChangeActive(id, e) {
            const active = e.target.checked;
            const options = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ active })
            };
    
            fetch(`/api/urls/${id}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({type: "CHANGE_ACTIVE", id, active});
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(UrlCard);