import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { usePosition } from 'use-position';



function Map() {
	const watch = true;
	const [location, setLocation] = useState({});
	const { latitude, longitude, error } = usePosition(watch);

	const containerStyle = {
		width: '100%',
		height: '100%',
	};



	useEffect(() => {
		if (latitude && longitude && !error) {
			const Position = { lat: latitude, lng: longitude };

			setLocation(Position);
		}
	}, [latitude, longitude, error]);
	return (
		<>
			{Object.keys(location).length > 0 ? (
				<LoadScript googleMapsApiKey='API-KEY'>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={location}
						zoom={15}
					>
						<Marker
							position={{
								lat: location.lat,
								lng: location.lng,
							}}
							title='My Location'
						></Marker>
					</GoogleMap>
				</LoadScript>
			) : (
				<div>{error}</div>
			)}
		</>
	);
}

export default Map;
