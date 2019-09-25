import React, { Component } from 'react';
import UrlCard from './UrlCard';
import { connect } from "react-redux";
import * as uuid from "uuid/v1";

class CardList extends Component {
    render() {
        const reverseData = [...this.props.tempData].reverse();
        return (
            <div className="card-list">
                {
                    reverseData.map((item, index) => (
                        <UrlCard 
                            key={uuid()} 
                            id={item._id}
                            originUrl={item.originUrl} 
                            shortenedUrl={"http://localhost:3001/" + item.shortenedUrlId} 
                            active={item.active}
                        />
                    ))
                }             
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tempData: state.tempData
    }
}

export default connect(mapStateToProps)(CardList);