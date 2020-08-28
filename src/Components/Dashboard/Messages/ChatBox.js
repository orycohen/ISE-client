import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../Contexts/auth';
import './ChatBox.scss';

const MessageBlock = (props) => {
	const { message, user, msgDate } = props.msg;
	return (
		<div className='messageBlock'>
			<div className='messageBlockInfo'>
				<label>{user}</label>
				<label>{msgDate}</label>
			</div>
			<div className='messageBlockContent'>
				<h3>{message}</h3>
			</div>
		</div>
	);
}

const ChatBox = (props) => {
	const { user } = useAuth();
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');

	const sendMessage = e => {
		e.preventDefault();
		props.io.emit('message', {message, user} )
	}

	const messageChanged = e => {
		setMessage(e.target.value);
	}

	const socket = props.io;

	useEffect(() => {
		socket.on('broad', data => {
			setMessages([...messages, data]);
		})
	}, [socket, messages, setMessages]);

	return (
		<div className='messagesWrapper'>
			<div className='messagesBox'>
			{
				messages.map(message => <MessageBlock msg={message} key={message.key}/>)
			}
			</div>
			{ user.type === 'Manager' &&
				<div className='messagesSend'>
					<div className='messageArea'>
						<input type='textarea' onChange={messageChanged}/>
					</div>
					<button className='messageSend' onClick={sendMessage}>
						Send
					</button>
				</div>
			}
		</div>
	)
}

export default ChatBox;
