import React, { useEffect, useState } from 'react';
import './Messages.scss';
import socketIOClient from 'socket.io-client';
import ChatBox from './ChatBox';
import { MagnetBox } from '../../Styled';

const ENDPOINT = 'http://localhost:8080';

const Messages = (props) => {
	const socket = socketIOClient(ENDPOINT);
	useEffect(() => {
		socket.on('broad', data => {
			console.log('messages says:', data);
		});
	}, [socket]);

	return (
		<MagnetBox height='100%'>
			<ChatBox io={socket}/>
		</MagnetBox>
	);
}

export default Messages;
