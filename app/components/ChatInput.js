import React from 'react';

/*
    Here the user can type and send his messages.
*/
class ChatInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {userInput: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userInput : event.target.value });
    }
    
    handleSubmit(event){
        event.preventDefault()
        var newInput = this.state.userInput;
        this.props.onSendMessage(newInput);
        this.setState({userInput: ''})
        this.refs.inputField.value = '';
    }

    render() {
        return (
        <div className="chat_input" >
            <form onSubmit={this.handleSubmit} className="form-inline" >
                <div className="form-group">
                    <label>Message: </label>
                    <input  
                        className="form-control"
                        type="text"
                        ref="inputField"
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                </div>
                    <button type="submit" value="Send" className="btn btn-default"> Send </button>
            </form>
        </div>
        )
    }
};

const inputStyle = {
    width: '70%',

}

module.exports = ChatInput;