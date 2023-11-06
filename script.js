const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const vehicle = document.querySelector('#vehicle')
const model = document.querySelector('#model')
const color = document.querySelector('#color')
const name = document.querySelector('#name')
const manufacturer = document.querySelector('#manufacturer')
const img = document.querySelector('#img')
const catBtn = document.querySelector('#cat')
console.log(input.value)


submit.addEventListener('click', () => {
    let value = input.value
    fetch(`https://swapi.dev/api/people/${value}`)
        .then(res => res.json())
        .then(json => {
            name.innerHTML = json.name
            color.innerHTML = json.hair_color
            vehicleUrl = json.vehicles[0]

            fetch(vehicleUrl)
               .then(res => res.json())
                .then(json => {
                    vehicle.innerHTML = json.name
                    model.innerHTML = json.model
                    manufacturer.innerHTML = json.manufacturer
                     })
                })
        })

 catBtn.addEventListener('click',()=>{
 fetch('https://api.thecatapi.com/v1/images/search')
   .then(res =>res.json())
  .then(json=>{
    console.log(json)
   img.src=json[0].url
    console.log(img.src=json[0].url)
  })
})





 