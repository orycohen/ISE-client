import React, { useEffect, useState } from 'react';
import './Messages.scss';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:8080';

const Messages = (props) => {
  const [response, setResponse] = useState('');

  useEffect(() => {
	const socket = socketIOClient(ENDPOINT);
	socket.on('msg', data => {
		setResponse(data.message);
	});
  }, []);

  return (
    <div>
      The Messages page, {response}
    </div>
  );
}

export default Messages;
