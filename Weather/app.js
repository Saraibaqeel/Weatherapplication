// let obj={
//     value:res,
// }

// const getData = new Promise((resolve, reject) => {
//     fetch(` https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=4d666ec719df3834c0eaf7c6a9f2b82d&units=metric`)
//         .then((res) => res.json())
//         .then((res) => resolve(res))
//          .catch((err) => reject(err));
//      });
//      getData.then((res) => console.log(res));

//     function resolve(){
      
//     }
// let City=prompt("Enter City")
// const getData = new Promise((resolve, reject) => {
//     fetch(` https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=4d666ec719df3834c0eaf7c6a9f2b82d&units=metric`)
//         .then((res) => res.json())
//         .then((res) => resolve(res))
//          .catch((err) => reject(err));
//      });
//      getData.then((res) => console.log(res));
let cit=document.getElementById("content1")
let cit1=document.getElementById("p1")

    function Display(){
      let now = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric"});
console.log(now)
      let City=document.getElementById("input").value
      console.log(City)
      fetch(` https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=4d666ec719df3834c0eaf7c6a9f2b82d&units=metric`)
      .then((res)=> res.json() )
      // .then((res)=> console.log(res) )
      
      .then((res)=>{
        console.log(res)
        if(res.cod===200){
          
        cit.innerHTML=`
       
      
      
      
      
      <p class="text-name city-name animate__animated animate__fadeInUp"  ">${res.name}</p>
      <p class="count-name animate__animated animate__fadeInUp  ">${res.sys.country}</p>
      <p class="date animate__animated animate__fadeInUp">${now}</p>
      <p class="text1 temp1 animate__animated animate__fadeInUp" style="font-weight:600;" ><span> <img id="icon" src=""></span> ${res.main.temp}<sup>&#176;C</sup> <div class="weather-text animate__animated animate__fadeInUp" style="font-weight:100;">${res.weather[0].main}</div> </p>
      
      <p class="text weather-text  animate__animated animate__fadeInUp temp">Feels-Like(${res.main.feels_like}&#8451;)</p>
      
      
    
      <p class="text1 weather-text temp temperatures-icons  animate__animated animate__fadeInUp" > <img src="assests/hum.png" width="20px">${res.main.humidity}%   <span class="temperatures-icons"><img src="assests/max-temp.png" width="20px ">${res.main.temp_max}&#176;C </span> <span><img src="assests/min-temp.png" width="20px ">${res.main.temp_min}&#176;C </span></p>
      
      
      `
      if(res.weather[0].main==="Smoke"){
        let bg=document.getElementById("icon")
        bg.src= "assests/cloudy.png";
      }
       document.getElementById("input").value=""
        }
        else{
          cit.innerHTML=``
          document.getElementById("input").value=""
          swal("Error", "City Not Found!");
        }
    })

       
      .catch((err)=>(console.log(err)))
    }
    
    