//Your API calling and map interaction code goes here !!
//Leaflet.js config
//Explore options in the Leaflet.js documentation to make map more interactive
const map = L.map("map", {
  center: [0, 0],
  maxBounds: [
    [-90, -200],
    [90, 200],
  ],
});

const apiCall = () => {
  let value = {}
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log({
        "latitude": data.latitude,
        "longitude": data.longitude,
        "altitude": data.altitude,
        "velocity": data.velocity,
        "units": "kilometers"
      })
      value = {
        "latitude": data.latitude,
        "longitude": data.longitude,
        "altitude": data.altitude,
        "velocity": data.velocity,
        "units": "kilometers"
      }
    })
    .catch((error) => {
      console.log(error)
    });
  return value
}

apiCall();

map.fitWorld();

L.tileLayer(
  "https://tile.thunderforest.com/atlas/{z}/{x}/{y}.jpg?apikey=3e4e3c1a08854a3eafaa7d75e14c6736",
  { foo: "bar" }
).addTo(map);

if (situation === false) {
  Window.tracking = setInterval(updateDisp, 3000);
  situation = true;
  startStop.innerText = "Stop Tracking";
  startStop.classList.remove("is-success");
  startStop.classList.add("is-danger");
} else {
  clearInterval(Window.tracking);
  situation = false;
  startStop.innerText = "Start Tracking";
  startStop.classList.remove("is-danger");
  startStop.classList.add("is-success");
}
const updateDisp = async () => { };

async function tracker() {
  const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
  const data = await res.json();
  return data;
}

//dont change default tile view in line 14-17
