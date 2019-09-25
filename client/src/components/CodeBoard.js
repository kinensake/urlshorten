import React, { Component } from 'react';

class CodeBoard extends Component {
    constructor(props) {
        super(props);
        this.refCode = React.createRef();
    }

    handleSubmitCode = () => {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({code: this.refCode.current.value})
        }
        fetch("/api/code", options)
        .then(res => res.json())
        .then(data => {
            if (data.success) this.props.history.push("/list");
        })
    }

    render() {
        return (
            <div className="code-board">
                <div className="code-wrapper">
                    <h1 className="title">Input your code below</h1>
                    <div className="form">
                        <input ref={this.refCode} type="text" className="form-input" />
                        <button className="form-submit" onClick={this.handleSubmitCode}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodeBoard;