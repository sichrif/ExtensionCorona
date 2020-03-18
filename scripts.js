

fetch('https://coronavirus-19-api.herokuapp.com/countries')
  .then((response) =>response.json())
  .then(data => {
    const stringifiedData =JSON.stringify(data);
    const parsedData = JSON.parse(stringifiedData);
    for(var i=0;i<=parsedData.length;i++){
   // document.write(parsedData[i]["country"] + "<br>");
   //document.write(parsedData[1]["deaths"]);
   if(parsedData[i]["country"]=="Tunisia")
                {
                    document.getElementById("p1").innerHTML = parsedData[i]["recovered"];
                    document.getElementById("p2").innerHTML = parsedData[i]["cases"];
                    document.getElementById("p3").innerHTML = parsedData[i]["active"];
                    document.getElementById("p4").innerHTML = parsedData[i]["deaths"];      
                    document.getElementById("p4").innerHTML = parsedData[i]["todayCases"];            
                    document.getElementById("p4").innerHTML = parsedData[i]["deaths"];            
                    document.getElementById("p4").innerHTML = parsedData[i]["deaths"];            
      
                }

    }
  })
  .catch(err => {
    // Do something for an error here
  })