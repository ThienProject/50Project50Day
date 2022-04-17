const button =  document.querySelector("button");
const storys = document.querySelector(".story");

button.addEventListener('click',generateJoke);
generateJoke() ;
async function generateJoke() {
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
    
      const res = await fetch('https://icanhazdadjoke.com', config)
    
      const data = await res.json()
    storys.innerHTML = data.joke
}