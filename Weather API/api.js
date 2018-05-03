let request = new XMLHttpRequest();

function displayNicely(apiData){
    let newData = JSON.parse(apiData);
    let htmlString = "<div class='text1'>City:"+"<span>"+newData.name+"</span></div>";
    console.log(newData);
    htmlString += "<div class='text1'>Current Weather:"+"<span>"+newData.weather[0].description+"</span></div>";
    document.getElementById("weather").innerHTML = htmlString;
    document.getElementById("icon").src = "https://openweathermap.org/img/w/" + newData.weather[0].icon + ".png";
    
}

request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){ 
        displayNicely(this.responseText);     
    }else if(this.readyState == 4 && this.status == 404){
        document.getElementById("weather").innerHTML="<strong>City Not Found. Please Try Again!</strong>";
    } 
};

let apiKey = "4ad3fa3ae062c63dbdc440265be60625";

function myCity(){
    let cityName = document.getElementById("uniqueID").value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID="+apiKey); 

/*Matts Solution 
function submitCity(){
    city = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKEY);
}*/
    
    
    request.send();
    return false;
}



