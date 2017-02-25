import React from 'react';
import User from './User.js';

/*
    This component shows all the users who have logged in
    target is a users whose chat history we want to see
*/
class UsersOnlineList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {target: this.props.targetUser};

        this.resetTarget = this.resetTarget.bind(this);

    }
    resetTarget(event) {
        var newTarget = "_all"
        this.props.onChangeTarget(newTarget)
    }

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar" >

                <h4> users online </h4>
                <button type="button" onClick={this.resetTarget}  
                        className ="btn btn-sm btn-default" style= {resetTargetStyle} >All Chat</button>
                    <div className = "list-group" style={sideBarStyle}>
                        {
                            this.props.userList.map((user, i) => {
                                return (
                                   
                                    <User
                                        key={i}
                                        nick={user.nick}
                                        online={user.online}
                                        onChangeTarget = {this.props.onChangeTarget}
                                    />
        
                                );
                            })
                        }
                    </div>

            </div>
        )
    }
}
const resetTargetStyle = {
    width:'100%'
}

const sideBarStyle = {
    Height: '100%',
    maxHeight: '85%',
    overflowY: 'auto',
}

module.exports = UsersOnlineList;