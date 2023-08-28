const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

//Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`); 
  const fetchedLaunches = await response.json(); 
  return fetchedLaunches.sort((a, b) => { //Sorts flights based on ascending flightNumbers
    return a.flightNumber - b.flightNumber; //Compares the flightNumbers of two launches 
  })
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post", 
      header: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(launch), 
    });
  } catch (err) {
    return {
      ok: false
    }
  }
}

//Deletes a launch with a given ID
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete"
    });
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};