import React from'react';

/*
    Renders a single users. Color changes depengin on if he
    is online of offline
*/
class User extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickUser = this.handleClickUser.bind(this)
    }
    handleClickUser(){
        this.props.onChangeTarget(this.props.nick)
    }

    render() {
        if(this.props.online){
        return (
            <button    
                className="userOnline list-group-item list-group-item-success" 
                onClick={this.handleClickUser}
                style = {userStyle}
            >
                <strong>{this.props.nick}</strong>
            </button>
        )
        }
        else{
            return(

            <button 
                className="userOffline list-group-item list-group-item-danger" 
                onClick={this.handleClickUser}
                style = {userStyle}
            >
                <strong>{this.props.nick}</strong>
            </button>
            )
        }
    }
};

const userStyle = {
    wordWrap: 'break-word',
}

module.exports = User;
