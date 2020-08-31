import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Requests.scss';
import { Card, Label, Button } from '../../../Styled';

const NeedyRequest = props => {
	const [ accepted, setAccepted ] = useState(false);
	const acceptData = (e) => {
		e.preventDefault();
		Axios({
			method: 'POST',
			url: 'http://localhost:8080/api/add-needy',
			withCredentials: true,
			data: {
				name: props.data.name,
				coordinate: props.data.coordinate,
				phone: props.data.phone,
				age: props.data.age,
				id: props.data._id,
				fromRequest: true
			}
		})
		.then(res => {
			console.log(res);
			setAccepted(true)
		})
		.catch(err => console.log('Error:', err));
	};
	return (
		<div className='RequestBox'>
			<Label>Name: {props.data.name}</Label>
			<Label>Phone: {props.data.phone}</Label>
			<Label>Age: {props.data.age}</Label>
			{
				accepted
				? <Label>Accepted!</Label>
				: <Button onClick={acceptData}>Accept</Button>
			}
		</div>
	);
};

const Requests = props => {
	const [ requests, setRequests ] = useState([]);
	useEffect(() => {
		Axios({
			method: 'GET',
			url: 'http://localhost:8080/api/requests',
			withCredentials: true
		})
		.then(res => {
			setRequests([...res.data]);
		})
		.catch(err => {
			console.log('error from server: ', err);
		});
	}, [setRequests]);
	return (
		<>
		{ 
			requests.length
			? requests.map(request => <NeedyRequest data={request} key={request._id}/>) 
			: <Label>No Requests Waiting</Label>
		}
		</>
	);
};

export default Requests;
