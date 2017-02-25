import React from 'react';
import Message from './Message.js'

/*
    This componen is where we show all chat messages
    Also checks who sent message -> filters _server messages
*/
class ChatHistory extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var showingText;
        if(this.props.targetUser != "_all"){
            showingText = "Showing user: " + this.props.targetUser +"'s message history"
        }
        else{
            showingText = "Showing everyones messages"
        }
        return (
            <div className="chat_history" >
                <h4 style={targetStyle} >{showingText}</h4>
                    <ul className= "list-group" style={chatStyle}>
                    {
                        this.props.messageList.map((message, i) => {
                            if(message.from == this.props.targetUser) {
    
                                return  (
                                <Message
                                    key={i}
                                    from={message.from}
                                    msg={message.msg}
                                />
                                );
                            }
                            else if(message.from != "_server" && this.props.targetUser == "_all"){
    
    
                                return  (
                                <Message
                                    key={i}
                                    from={message.from}
                                    msg={message.msg}
                                />
                                );
                            }
                        })
                    }
                    </ul>
            </div>
        );
    }
};

const targetStyle = {
    wordWrap: 'break-word',

}
const chatStyle = {
    verticalAlign: 'bottom',
    Height: '100%',
    maxHeight: '85%',
    overflowY: 'auto',
}

module.exports = ChatHistory;