import React , { useState } from 'react';
import './UpdateDetails.scss';
import cameraImg from '../../../../img/camera.png';
import { Card, Icon, Form, Input, MagnetBox, Button, Label} from '../../../Styled.js';
import { useAuth } from '../../../../Contexts/auth.js';
import Axios from 'axios';

const UpdateDetails = (props) => {
	const [ selectedFile, setSelectedFile ] = useState();
	const [ fileName, setFileName ] = useState();
	const [ phoneNumber, setPhoneNumber ] = useState();
	const [ address, setAddress ] = useState();
	const { user } = useAuth();
	const onFileChange = event => {
		setSelectedFile(event.target.files[0]);
		setFileName(event.target.files[0].name);
	}
	const onPhoneChange = event => {
		setPhoneNumber(event.target.value);
	}
	const onAddressChange = event => {
		setAddress(event.target.value);
	}
	const onDetailsSubmit = event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('image', selectedFile, selectedFile.name);
		formData.append('address', address);
		formData.append('phoneNumber', phoneNumber);
		Axios({
			method: 'PUT',
			url: 'http://localhost:8080/users/update',
			withCredentials: true,
			data: formData
		})
		.then(res => {
			console.log('respose from server: ', res);
		})
		.catch(err => {
			console.log('error from server: ', err);
		});
	};
	return (
		<>
			<Form>
					<label htmlFor='imfile'>
						<MagnetBox>
							<Label>{fileName ? fileName : 'No Name'}</Label>
							<Icon clickable shadow="4px 4px 4px #333" size={"50px"} src={cameraImg} />
							<input type='file' id='imfile' style={{display: 'none'}} onChange={onFileChange}/>
						</MagnetBox>
					</label>
					<Input type='text' placeholder='Phone Number' onChange={onPhoneChange}/>
					<Input type='text' placeholder='Address' onChange={onAddressChange}/>
					<MagnetBox>
						<Button onClick={onDetailsSubmit}>Update Information</Button>
					</MagnetBox>
			</Form>
		</>
	);
}

export default UpdateDetails;
