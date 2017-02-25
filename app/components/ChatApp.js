import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField.js';
import UsersOnlineList from './UsersOnlineList.js';
import ChatHistory from './ChatHistory.js';
import ChatInput from './ChatInput.js';

/*
    Simple real-time chat application that communicates with a websocket
*/
class ChatApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageList: [],
            userList: [],
            user: "_noNick",
            targetUser: "_all",
            url: '127.0.0.1:8888'
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.updateUserList = this.updateUserList.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
        this.handleChangeTarget = this.handleChangeTarget.bind(this);

    }

    componentDidMount() {
        this.request = new Request( "http://" + this.state.url);
        this.connection = new WebSocket( "ws://" + this.state.url)
        this.connection.onmessage = function (event) {
            try{
                var msg = JSON.parse(event.data);

                if('error' in msg) {
                    console.log(msg.error);
                    this.setState({user: "_noNick"})
                    alert("nick in use")
                    return
                }
                else {
                    this.updateMessages();
                    this.updateUserList();
                }
            }
            catch(e){
                    console.log(e)
            }
        }.bind(this)
        this.updateMessages();
        this.updateUserList();
    }

    componentWillUnmount() {
        this.connection.close();
    }

    updateUserList() {
        var requestUrl = this.request.url + "users";
        fetch(requestUrl)
        .then(result=>result.json())
        .then(data=>this.setState({userList: data.data}))

    }

    updateMessages() {
        var requestUrl = this.request.url + "history";
        fetch(requestUrl)
        .then(result=>result.json())
        .then(data=>this.setState({messageList: data.data}))
    }


    handleChangeName(newName) {
        var oldName = this.state.user;
        var message = "/nick " + newName;
        this.setState({user: newName});
        this.connection.send(message);
        this.updateUserList();
    }

    handleSendMessage(message){
        var userMessage =  message;
        this.connection.send(userMessage);
        this.updateMessages();

    }

    handleChangeTarget (newTarget){
        if(newTarget != this.state.targetUser )
        {
            this.setState({targetUser: newTarget})
        }
        else
        {
            this.setState({targetUser: "_all"})
        }
        
    }
    
    render () {
        return (
            <div className = "container" style= {containerStyle}>
                <InputField 
                        onChangeName={this.handleChangeName}
                        userNick={this.state.user}
                />
                    <div className="row" style= {headerStyle}>
                        <UsersOnlineList

                            userList = {this.state.userList}
                            targetUser = {this.state.targetUser}
                            onChangeTarget = {this.handleChangeTarget}
                        />
                        <div className=" col-sm-9 col-md-10 main">
                            <ChatHistory 
                                messageList = {this.state.messageList}
                                targetUser = {this.state.targetUser}
    
                            />
                            <ChatInput
                                onSendMessage={this.handleSendMessage}
                            />
                        </div>
                    </div>
            </div>
        )
    }
}
const containerStyle = {
    height:'100%',
}
const headerStyle = {
    height:'80%',
}

ReactDOM.render(
    <ChatApp/>,
    document.getElementById('app')
);