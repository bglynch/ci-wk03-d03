let request = new XMLHttpRequest();

function displayNicely(apiData){
    let newData = JSON.parse(apiData);
    console.log(newData);
    let htmlString = "<div class='text1'>City:"+"<span>"+newData.name+"</span></div>";
    htmlString += "<div class='text1'>Current Weather:"+"<span>"+newData.weather[0].description+"</span></div>";
    document.getElementById("weather").innerHTML = htmlString;
    document.getElementById("icon").innerHTML = "<img src='http://openweathermap.org/img/w/"+newData.weather[0].icon+"10n.png'>";
}

request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){ 
        displayNicely(this.responseText);     
    }else if(this.readyState == 4 && this.status == 404){
        document.getElementById("weather").innerHTML="<strong>City Not Found. Please Try Again!</strong>"
    } 
};

let appKey = "6ebea87dfc131fd5402906ce4b098ab8";

function myCity(){
    let cityName = document.getElementById("uniqueID").value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+myCity.cityName+"&APPID="); 

    request.send(); 
}



