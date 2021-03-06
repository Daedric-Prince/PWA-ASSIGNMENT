const container = document.querySelector(".container")
const teddy = [
  { name: "Game1", image: "images/god.jpeg" },
  { name: "Game2", image: "images/gta.jpeg" },
  { name: "Game3", image: "images/mario.jpeg" },
  { name: "Game4", image: "images/uncharted.jpeg" },
  { name: "Game5", image: "images/rd.jpeg" },
  { name: "Game6", image: "images/witcher.jpeg" },

]
const showTeddy = () => {
    let output = ""
    teddy.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Buy</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showTeddy)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
