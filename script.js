const response = await fetch("https://api.sunrise-sunset.org/json?lat=50&lng=14.5")
const json = await response.json()

console.log(json)

document.body.innerHTML += `
<p>Východ: ${data.results.astronomical_twilight_begin}</p>
<p>Západ: ${data.results.astronomical_twilight_end}</p>
`