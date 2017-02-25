import React from 'react';

/*
    Renders a single massage from a user
*/
class Message extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div className="message list-group-item " style= {messageStyle}>
                <strong>{this.props.from}: </strong>
                <span> {this.props.msg}</span>
            </div>
        )
    }
};

const messageStyle = {
    background: '#fbffd1',
    wordWrap: 'break-word',
}


module.exports = Message;