import React from 'react';

/*
    This component will take the users username and sen it to ChatApp.js
    as the websocket is unable to update users nickname we take away the inputfield
    after the user has set his nickname
*/
class InputField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ newName : event.target.value });
    }
    
    handleSubmit(event){
        event.preventDefault();
        var newName = this.state.newName;
        this.props.onChangeName(newName);

    }
    render() {
        if(this.props.userNick == "_noNick"){
            return (

            <div className="input_field" style = {userInputFieldStyle}>
                <h3>
                    Welcome! <br/>
                </h3>
                <p>
                    Please, tell us who you are.
                </p>
        
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input  
                                value={this.state.value} 
                                onChange={this.handleChange} 
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )
        }
        else{

            return  <div style = {userInputFieldStyle}>
                        <h3> You are logged in as: {this.props.userNick} </h3>
                    </div>
        }

    }
};
const userInputFieldStyle = {
    height:'10%',
}

module.exports = InputField;