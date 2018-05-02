let request = new XMLHttpRequest();  //XML predates JSON. XMLHttpRequest does not mean that data will come through in XML format

function displayNicely(apiData){
    let newData = JSON.parse(apiData);
    let count = 0;
    for(let i in newData){
        count++;
        console.log(newData[i]);
        if(count == 8){
            break;
        }
    }
    
    let htmlString = "<div><strong>Name:</strong>"+newData.name+"</div>";
    htmlString += "<div><strong>Height:</strong>"+newData.height+"</div>";
    htmlString += "<div><strong>Weight:</strong>"+newData.mass+"</div>";
    htmlString += "<div><strong>Sex:</strong>"+newData.gender+"</div>";
    htmlString += "<div><strong>Skin:</strong>"+newData.skin_color+"</div>";
    document.getElementById("data").innerHTML = htmlString;

}

request.onreadystatechange = function(){                //when the ready state changes, we run this function
    if(this.readyState == 4 && this.status == 200){     //readyState == 4 - data has been downloaded,,,this.status == 200 - this data is ok
        displayNicely(this.responseText);      //this.responseText - all the data that comes back from request
    }                                               //JSON.parse changes data into a JSON object
};

request.open("GET", "https://swapi.co/api/people/1/");  //ask for data using the GET method

request.send();  // sending "https://swapi.co/api/people/1/" request to "https://swapi.co" server


/*
readyState
- readyState has 5 readyState functions
- in practice we only use ready state 4


*/