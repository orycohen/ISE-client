import React, { useEffect, useState } from 'react';
import './Map.scss';
import MapComponent from './BasicMap';
import Axios from 'axios';

const Map = (props) => {
	const [ needies, setNeedies ] = useState([]);
	useEffect(() => {
		Axios({
			method: 'GET',
			url: 'http://localhost:8080/api/all-needies',
			withCredentials: true
		})
		.then(res => { setNeedies(res.data) });
	}, [setNeedies]);
  return (
    <div className='MainDiv'>
	  <div className='Mapdiv'>
		<MapComponent markers={needies}/>
	  </div>
	  <div className='Mapinfodiv'>
	  	Hi
	  </div>
    </div>
  );
}

export default Map;
