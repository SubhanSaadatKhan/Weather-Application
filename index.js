const key = '36baf30b607ed48080bf2cfb77832865';
let city;
// console.log(az)
let btn = document.getElementById('btn');
btn.addEventListener('click',getData)

document.querySelector('.search-city').addEventListener('keyup',function(e){
    if (e.key == "Enter"){
        getData()
    }
})

function getData(){
    az = document.querySelector('.search-city');
    if(az.value == ""){
        city = 'Subang Jaya'
    }
    else{
        city = az.value;
    }
    az.value = "";
    //simple get request
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    fetch(url).then((response)=>{
        return response.json(); 
    }).then((data)=>{
        showData(data)
    
    })
}

function showData(data){
    const {name} = data;
    const {country} = data["sys"];
    const {temp,humidity} = data["main"];
    const {description} = data["weather"][0];
    const wind = data["wind"]["speed"];
    // console.log(name,temp,humidity,description,wind)
    document.querySelector('.city').innerText = `Weather in ${name}, ${country}`
    document.querySelector('.temperature').innerText = `${temp}°C`
    document.querySelector('.description').innerText = `${description.charAt(0).toUpperCase() + description.slice(1)}`
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
    document.querySelector('.wind').innerText = `Wind speed: ${wind} km/h`
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${city}')`
    document.getElementById('wea').classList.remove("visible")

}

getData();