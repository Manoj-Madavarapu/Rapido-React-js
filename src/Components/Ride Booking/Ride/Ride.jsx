import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ride.css";
import L from "leaflet";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import RideFooter from "../BottomFooter/RideFooter";
import Vehicle from "../Vehicles/Vehicle";
import Splash from "./Splash";
let Ride = () => {
  let [from, setFrom] = useState(null);
  let [to, setTo] = useState(null);
  let [fromAddress, setFromAddress] = useState("");
  let [toAddress, setToAddress] = useState("");
  let [search,setSearch]=useState("");
  let [fromSugesstions,setFromSugesstions]=useState([]);
  let [toSugesstions,setToSugesstions]=useState([]);
  let [distance,setDistance]=useState();
  let [userLocation,setUserLocation]=useState(null);
  let [splash,setSplash]=useState(true);
  let [iconData,setIconData]=useState(null);
let fetchCoordinates = async (address, setPosition) => {
  if (!address){
    return alert("Please Enter the address");
  }
  try{
  let response = await fetch(
    // `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
    `https://nominatim.openstreetmap.org/search?format=json&q=${address}&countrycodes=IN`
  );
  let data = await response.json();
  if (data.length > 0) {
    setPosition({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
    setFromSugesstions([]);
    setToSugesstions([]);
  }
  else{
    alert("Location not found");
  }
  }
  catch(err){
    console.log("Error in fetching coordinates:",err);
  }
}

let calculateDistance = (pos1, pos2) => {
  if (!pos1 || !pos2) return 0;
  let R = 6371;
  let dLat = ((pos2.lat - pos1.lat) * Math.PI) / 180;
  let dLng = ((pos2.lng - pos1.lng) * Math.PI) / 180;
  // we will get lat and long difference in degrees so to convert them into radians we use Math.PI/180
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((pos1.lat * Math.PI) / 180) *
    Math.cos((pos2.lat * Math.PI) / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // Math.atan2(y, x): Computes the arc tangent, which gives the angle in radians.
   return (R * c).toFixed(2);
  // Multiply Earth's radius by the angle to get distance in kilometers.
};
// the above formula is knowns as haversine formula which is used to calculate the disatnce between teo locations by long and lat

// for displaying suggestions
useEffect(() => {
  if(!search) return;
  let fetchData = async () => {
    try {
      let response = await fetch(
        // `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}&countrycodes=IN`
        );
      let data = await response.json()
      // let filteredData = data.filter(x =>x.display_name.toLowerCase().includes(search.toLowerCase()));
      if(search===fromAddress){
        // setFromSugesstions(filteredData);
        setFromSugesstions(data);
        setToSugesstions([])
      }
      else{
      // setToSugesstions(filteredData);
      setToSugesstions(data);
      setFromSugesstions([]);
    }
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };
  // fetchData();
  let timeoutId = setTimeout(() => {
    fetchData();
  }, 400);
  return () => clearTimeout(timeoutId);
},[search]);


useEffect(() => {
  if (from && to) {
    setDistance(calculateDistance(from, to));
  }
}, [from, to]);

// to re-center the map when markers update 
let RecenterMap = ({ from, to }) => {
  let map = useMap();
  useEffect(() => {
    if (from && to) {
      let bounds = L.latLngBounds([from, to]);
      map.fitBounds(bounds, { padding: [50, 50] });
      // apply padding from edges of map
    } else if (from) {
      map.setView(from, 13);
      // 13 is zoom level if only from address is there set map center to from address
    } else if (to) {
      map.setView(to, 13);
      // if only to address is there set map center to to address location
    }
  }, [from, to, map]);
  return null;
};

// location icon data
let defaultIcon = new L.Icon({
  iconUrl: "assets/pngwing.com (11).png",
  shadowUrl: markerShadow,
  iconSize: [50, 45], // Size of the icon
  iconAnchor: [26, 41], // to move icon left,right and top,bottom
  popupAnchor: [10, -34], // Where the popup should open(padding from icon for pop up)
  shadowSize: [70, 44],
})
let fromIcon = L.divIcon({
  className: "custom-marker",
  html: `<i class="fa-solid fa-map-pin" style="font-size:45px; color:green;"></i>`,
  iconAnchor:[13,44],
  popupAnchor: [0, -36],
});
let toIcon = L.divIcon({
  className: "custom-marker",
  html: `<i class="fa-solid fa-map-pin" style="font-size:40px; color:red;"></i>`,
  iconAnchor:[13,40],
  popupAnchor: [0, -36],
});

// to center the map to my location
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }
    )
  }
  else{
    alert("Uable to fetch location");
  }
  let handlesplash=setTimeout(()=>{
    setSplash(false);
  },2000);
  return ()=>clearTimeout(handlesplash);
}, []);

//  for giving icons according to vehicle seelction
  let getIcon =()=>{
    return new L.Icon({
    iconUrl:getIconUrl(),
    iconSize: [80, 60], 
    iconAnchor: [12, 41], 
    popupAnchor: [20, -35], 
    });
  }
  let getIconUrl=()=>{
    if(iconData){
      switch(iconData.type){
         case "Auto":return "/assets/Auto.webp";
         case "Car":return "/assets/Cab.webp";
         default:return "/assets/Bike.webp";
      }
    }
    return "/assets/Bike.webp";
  }

   // Fixed positions for bike markers around the 'from' location
   let generateBikeMarkers = () => {
    if (!from && !to) return [];
    let padding = 0.0015; // Adjust distance (smaller = closer)
    return [
      { lat: from.lat + padding, lng: from.lng },
      { lat: from.lat-0.0005, lng: from.lng },
      { lat: from.lat, lng: from.lng + padding},
      { lat: from.lat, lng: from.lng - padding },
      { lat: from.lat + padding, lng: from.lng + padding},
      { lat: from.lat - padding, lng: from.lng - padding },
    ];
  }

  return (
    <>
    {splash?<Splash/>:
    <div className="ride_outer">
    <div className="map_container">
      <div className="extra_work">
      <div className="logo ride_logo" onClick={()=>window.location.reload()}>
          {(from && to) && <div className="left_arrow"><i className="fa-solid fa-left-long" onClick={()=>window.location.reload()}></i></div>}
          <img src="https://logowik.com/content/uploads/images/rapido-bike-taxi8263.jpg" alt="" className="remove_image"/>
      </div>
      <div className="search_container">
        <div className="for_responsive">
        <input type="text" placeholder="Enter From Address" value={fromAddress} onChange={(e) =>{setFromAddress(e.target.value);setSearch(e.target.value);}}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              fetchCoordinates(fromAddress,setFrom);
              setFromSugesstions([])
            }}}/>
        <button onClick={()=>fetchCoordinates(fromAddress, setFrom)} className="search_icon"><i className="fa-solid fa-magnifying-glass"></i></button>
        {from && <button onClick={()=>setFromAddress("")} className="clear_btn"><i className="fa-solid fa-xmark"></i></button>}
        </div>
        {(fromAddress && fromSugesstions.length>0) &&
        <div className="suggestions">
          {fromSugesstions.map(x=>(
            <div key={x.place_id} className="suggestion_inner" onClick={()=>{setFromAddress(x.display_name); fetchCoordinates(x.display_name, setFrom);
              setFromSugesstions([]);}}>
               <i className="fa-solid fa-location-dot"></i>
               <div>
                  <p style={{fontWeight:"bold"}}>{x.name}</p>
                  <p>{x.display_name}</p>
               </div>
          </div>
          ))}
          </div>}
      <div className="for_responsive">
        <input type="text" placeholder="Enter To Address" value={toAddress}
          onChange={(e) =>{ setToAddress(e.target.value);setSearch(e.target.value)}}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
               fetchCoordinates(toAddress,setTo);
               setToSugesstions([])
            }}}/>
        <button onClick={()=>fetchCoordinates(toAddress,setTo)}  className="search_icon"><i className="fa-solid fa-magnifying-glass"></i></button>
        {to && <button onClick={()=>setToAddress("")} className="clear_btn"><i className="fa-solid fa-xmark"></i></button>}
      </div>
        {(toAddress && toSugesstions.length>0) &&
        <div className="suggestions to_suggestions">
          {toSugesstions.map(x=>(
          <div key={x.place_id} className="suggestion_inner" onClick={()=>{setToAddress(x.display_name); fetchCoordinates(x.display_name, setTo);
              setToSugesstions([]);}}>
               <i className="fa-solid fa-location-dot"></i>
               <div>
                  <p style={{fontSize:"14px",fontWeight:"bold"}}>{x.name}</p>
                  <p>{x.display_name}</p>
               </div>
          </div>
           ))}
          </div>}

      </div>
      <div className="distance_div">
           <i className="fa-solid fa-location-dot"></i>
           <div className="kilometers"><span>{distance}</span>{(from && to)?<span style={{fontSize:"16px"}}> Km</span>:""}</div>
           <i className="fa-solid fa-location-dot"></i>
        </div>
      </div>
      {userLocation?
      <>
      <MapContainer center={userLocation} zoom={13} zoomControl={false} className="map">
       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       {(!from && !to) && <Marker position={userLocation} icon={defaultIcon}><Popup>Your Current Location</Popup></Marker>}
       {from && <Marker position={from} icon={fromIcon}><Popup>From: {fromAddress}</Popup></Marker>}
       {to && <Marker position={to} icon={toIcon}><Popup>To: {toAddress}</Popup></Marker>}
       {from && to && <Polyline positions={[from, to]} color="black" />}
       {(from || to) && <RecenterMap from={from} to={to} />}
         {/* Rendering markers around 'from' location */}
         {generateBikeMarkers().map((pos, index) => (
           (from && to)&&<Marker key={index} position={pos} icon={getIcon()}>
           <Popup>Available</Popup>
         </Marker>
         ))}
      </MapContainer>
      </>:
      <p className="loading_map">Loading Map....</p>
      }
      {from && to && (
        <Vehicle distance={distance} setIconData={setIconData}/>
      )}
      {(!from || !to) &&<RideFooter/>}
    </div>
   </div>
}
   </>
  );
}
export default Ride;



// MapContainer: Main container for the map.
// TileLayer: Loads the map tiles(the actual visible map). from OpenStreetMap.
// Marker: Represents a location on the map.
// Popup: Displays information when clicking on a marker.
// Polyline: Draws a line between two points.
// useMap: Hook to access and control the map instance.
// Leaflet (L): A JavaScript library for interactive maps.
//  L.divIcon({ ... })This is Leaflet's function for creating a custom HTML-based icon instead of using an image.