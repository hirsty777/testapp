const jarea=document.getElementById('area');
const jbacksound=document.getElementById('backsound');
const jaudioback=document.querySelector('.audioback');
const jbackvideo=document.getElementById('backvideo');
var off=true;




function ff(){
    if(off){
        jarea.src="volumeicon.png";  
        jbackvideo.muted=false;
        off=false;
    }  
    else if(!off){
        jarea.src="volumeicond.png";
        jbackvideo.muted=true;
        off=true;
    }
};

//================after search BTN=============================
const api={
    key:"290f6ea515faef9b6ec5f3f2a180e8b9",
    base:"http://api.openweathermap.org/data/2.5/weather"
};

const searchbox=document.querySelector('.search-box');

searchbox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
          getWeatherReport(searchbox.value);
          jbackground.style.display='none';
    }
});
//=================fetch api=========================
function getWeatherReport(city){
     fetch(`${api.base}?q=${city}&appid=${api.key}&units=metric`)
     .then(weather=>{
         return weather.json();
     }).then(showWeatherReport);
};
//==============================================================
function showWeatherReport(weather){
    console.log(weather)
      let jtemp=document.querySelector(".temp");
      jtemp.innerHTML=`${Math.round(weather.main.temp)}<span>°c</span>`;

      let jcity=document.querySelector(".city");
      jcity.innerHTML=`${weather.name},${weather.sys.country}`;

      let jweather=document.querySelector('.weather');
      jweather.innerHTML=`${weather.weather[0].main}`;

     
     //weather images and sounds============================
      if(jweather.textContent=="Clouds"){
          
        }
      else if(jweather.textContent=="Clear"){
        jbackvideo.src='weather/clearD.mp4';
    }
      else if(jweather.textContent=="Snow"){
        jbackvideo.src='weather/snowN.mp4';
    }
      else if(jweather.textContent=="Rain"){
       
    };

      var myDate=new Date();
      let day=myDate.getDay();
      let dayNumb=myDate.getDate();
      let monthNumb=myDate.getMonth()+1;
      let yearNumb=myDate.getFullYear()+1;

      //decleare wich day is its
      switch(day){
           case 1:
               day="ორშაბათი";
               break;
            case 2:
               day="სამშაბათი";
               break ;
            case 3:
                day="ოთხშაბათი";
               break;
            case 4:
                day="ხუთშაბათუ";
               break;
            case 5:
                day="პარასკევი";
               break;
            case 6:
                day="შაბათი";
               break;
            case 7:
                day="კვირა";
                                  
      };
     
     let jdate=document.querySelector(".date");
     jdate.innerHTML=day+" "+dayNumb+"/"+monthNumb+"/"+yearNumb;

};
