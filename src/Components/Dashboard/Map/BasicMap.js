import React from 'react'
import {Label} from '../../Styled';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Map.scss';
 
export class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialCenter: props.center ?? { lat: 31, lng: 35 },
			markers: props.markers ?? [],
			selectedMarker: null
		};
		this.mapClicked = this.mapClicked.bind(this);
	}
	infoWinClosed() {
		this.setState({
			selectedMarker: null
		})
	}
	markerSelected(marker) {
		console.log('Inside the selected', marker);
		this.setState({
			selectedMarker: marker
		});
	}
	mapClicked(t, map, coordinate) { 
		const { latLng } = coordinate;
		const lat = latLng.lat();
		const lng = latLng.lng();
		this.setState({ selectedLocation: { lat, lng } });
		if (this.props.onMapClicked) this.props.onMapClicked({lat,lng});
	}
	render() {
	const containerStyle = this.props.style ?? {
		position: 'relative',
		width: '100%',
		height: '100vh'
	}
	console.log('All needies: ', this.state.markers);
	console.log('selected: ', this.state.selectedMarker);
	console.log(Map)
	return (
		<Map 
			onClick={this.mapClicked}
			containerStyle={containerStyle}
			initialCenter={this.state.initialCenter}
			google={this.props.google}
			zoom={8}>
			{
				this.state.markers.map(marker => (
					<Marker 
						key={marker._id}
						position={marker.coordinate}
						onClick={() => { this.markerSelected(marker) }}
					/>
				))
			}
			{
				this.state.selectedMarker &&
				(
					<InfoWindow 
						visible={true}
						onOpen={() => console.log('HIIIII')}
						onClose={() => {this.infoWinClosed()}}>
						<div>
							<Label>{this.state.selectedMarker.name}</Label>
						</div>
					</InfoWindow>
				)
			}
		</Map>
    );
  }
}
 
export default GoogleApiWrapper({
	apiKey: ("AIzaSyBdVm06EyVP2Khss295ZAu1ZOLV_RdgOjQ"),
})(MapContainer)
