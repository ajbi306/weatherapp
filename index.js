const  temperature = document.getElementById("weather1");
const  city = document.getElementById("weather2 p");
const  date = document.getElementById("weather2 span");
const  emoji = document.getElementById("weather3 p");
const  condition = document.getElementById("weather3 span");
const   form = document.getElementById("form");
const  search = document.getElementById("search");

//let target = "patna"
const fetchdata = async (target) => {

    try{

   const url = `https://api.weatherapi.com/v1/current.json?key=32865e7b2678485a991161252220207&q=${target}`
   
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    temperature.innerText = data.current.temp_c + "°";
    city.innerText = data.location.name;
    date.innerText = data.location.localtime;
    emoji.src = "https:" + data.current.condition.icon;
    console.log(data.current.condition.icon);
    condition.innerText = data.current.condition.text;
    }catch(error){
        alert("Location Not Found");
    }
};

const searchfield = (e) =>{
    e.preventDefault();

    let target = search.value ;
    fetchdata(target); 
}
form.addEventListener("submit",searchfield);
