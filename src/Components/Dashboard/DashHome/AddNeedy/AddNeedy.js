import React, { useState } from 'react';
import BasicMap from '../../Map/BasicMap';
import { Label, MagnetBox, Card, Icon, Form, Input, Button, Error } from '../../../Styled';
import Map from '../../Map/BasicMap';
import Axios from 'axios';
import { useAuth } from '../../../../Contexts/auth';

const AddNeedy = (props) => {
	const [ name, setName ] = useState();
	const [ phone, setPhone ] = useState();
	const [ age, setAge ] = useState();
	const [ coordinate, setCoordinate ] = useState({lat: 0., lng: 0.});
	const { user } = useAuth();

	const mapClicked = coord => {
		console.log('map clicked in needy', coord);
		setCoordinate(coord);
	}

	const onSendData = e => {
		e.preventDefault();
		const data = {name, coordinate, phone, age};
		const url = `http://localhost:8080/api/${user.type === "Manager" ? "add" : "request"}-needy`;
		console.log(data);
		Axios({
			method: 'POST',
			url, data,
			withCredentials: true
		})
		.then(res => console.log('server response', res))
		.catch(err => console.log('server error', err))
	}

	const style = {position: 'relative', width: '100%', height: '50vh'};
	return (
		<>
			<Map style={style} onMapClicked={mapClicked}/>
			<Card>
				<Form>
					<MagnetBox>
						<Label>{coordinate.lat.toFixed(6)}, {coordinate.lng.toFixed(6)}</Label>
					</MagnetBox>
					<Input type='text' onChange={e => {setName(e.target.value);}} placeholder='Name' required/>
					<Input type='text' onChange={e => {setPhone(e.target.value);}} placeholder='Phone' required/>
					<Input type='number' onChange={e => {setAge(e.target.value);}} placeholder='Age' required/>
					<MagnetBox bottom height={"60px"}>
						<Button primary onClick={onSendData}>{user.type === 'Manager' ? 'Send Data' : 'Request Post'}</Button>
					</MagnetBox>
				</Form>
			</Card>
		</>
	);
}

export default AddNeedy;
