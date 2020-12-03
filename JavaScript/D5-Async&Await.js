//Day-5
//Async and await in action...
async function doFetch() {
  let response = await fetch("https:api/spotify.com");

  if (!response.ok) {
    throw new Error(`An error occured! status: ${response.status}`);
  } else {
    let data = await response.json();
    return data;
  }
}

myFetch()
  .then((data) => console.log(data))
  .catch((e) => console.log(e)); //catches any error
