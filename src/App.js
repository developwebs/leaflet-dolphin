import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import DrawTools from "./components/DrawTools";

// import { GlobalStateProvider, useGlobalState } from "./services/Store";
import EditFeature from "./EditFeature";
import { Map, TileLayer } from "react-leaflet";
// import { EditControl } from "react-leaflet-draw";
// import "./styles.css";
// import "react-leaflet-fullscreen/dist/styles.css";
import FullscreenControl from "react-leaflet-fullscreen";

const App = () => {
	const mapConfig = {
		lat: 22,
		lng: -72,
		zoom: 6
	};

	return (
		<Fragment>
			{/* <GlobalStateProvider> */}
			<div id="map-wrapper">
				<Map center={[mapConfig.lat, mapConfig.lng]} zoom={mapConfig.zoom}>
					<FullscreenControl position="topleft" />
					{/* <DrawTools /> */}
					<EditFeature />
					<TileLayer
						attribution="Tiles &copy; Carto"
						// url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
						url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
					/>
				</Map>
			</div>
			{/* </GlobalStateProvider> */}
		</Fragment>
	);
};

export default App;
