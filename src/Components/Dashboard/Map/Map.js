import React from 'react';
import './Map.scss';
import MyComponents from './BasicMap';

const Map = (props) => {
  return (
    <div className='MainDiv'>
	  <div className='Mapdiv'>
		<MyComponents/>
	  </div>
	  <div className='Mapinfodiv'>
	  	Hi
	  </div>
    </div>
  );
}

export default Map;
