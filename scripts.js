fetch('https://coronavirus-19-api.herokuapp.com/countries')
  .then((response) =>response.json())
  .then(data => {
    const stringifiedData =JSON.stringify(data);
    const parsedData = JSON.parse(stringifiedData);
    for(var i=0;i<=parsedData.length;i++){
   if(parsedData[i]["country"]=="Tunisia")
                {
                    document.getElementById("p1").innerHTML = parsedData[i]["recovered"];
                    document.getElementById("p2").innerHTML = parsedData[i]["cases"];
                    document.getElementById("p3").innerHTML = parsedData[i]["active"];
                    document.getElementById("p4").innerHTML = parsedData[i]["deaths"];      
                    document.getElementById("p5").innerHTML = parsedData[i]["todayCases"];            
                    document.getElementById("p6").innerHTML = parsedData[i]["todayDeaths"];            
                    var notifa ={
                      type: 'basic',
                      iconUrl: 'icon128.png',
                      title: 'Daily cases reminder',
                       message: 'today cases in tunisia :' + parsedData[i]["todayCases"] +' all cases : ' +parsedData[i]["cases"]
                    }
 
                    setInterval(function myFunction() {
                        chrome.notifications.create('limitNotif',notifa);
                  },21600000);
                  
                   chrome.browserAction.setBadgeText({text:''+parsedData[i]["cases"]+''});

                                   
                }

    }
  })
  .catch(err => {
    // Do something for an error here
  })
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
      document.getElementById("click-this").addEventListener("click", handler);
    });

    function handler() {
    

      let wileya=document.getElementById("wileya").value ; 
      let esmha=document.getElementById("nnn");
      var cas=0;
  fetch('https://covid19.knsd.digital/api/?f=api&endpoint=governates')
  .then((response) =>response.json())
  .then(data => {
    const stringifiedData =JSON.stringify(data);
    const tunis = JSON.parse(stringifiedData);

    [].forEach.call(  document.querySelectorAll('#form :checked')  , function(elm){
      esmha.innerHTML=elm.value;


    switch (elm.value) {
                              case "Bizerte":
                                    cas = tunis["Bizerte, Tunisia"];
                              break;
                          case "Ariana":
                            cas = tunis["Ariana, Tunisia"];                     
                          break;
                          case "Manouba":
                              cas = tunis["Manouba, Tunisia"];
                        break;
                        case "Gabes":
                              cas = tunis["Gabes, Tunisia"];
                           break;
                           case "Kebili":
                              cas = tunis["Kebili, Tunisia"];
                           break;
                          case "Kairouan":
                                cas = tunis["Kairouan, Tunisia"];
                           break;
                          case "Mahdia":
                                cas = tunis["Mahdia, Tunisia"];
                           break;
                          case "Monastir":
                                cas = tunis["Monastir, Tunisia"];
                           break;
                          case "Sfax":
                                cas = tunis["Sfax, Tunisia"];
                           break;
                          case "Sousse":
                                cas = tunis["Sousse, Tunisia"];
                           break;
                          case "Tataouine":
                                 cas = tunis["Tataouine, Tunisia"];
                           break;
                          case "Tunis":
                                 cas = tunis["Tunis, Tunisia"];
                           break;
                          case "Nabeul":
                                cas = tunis["Nabeul, Tunisia"];
                           break;
                          case "Mednine":
                                cas = tunis["Mednine, Tunisia"];
                           break;
                          case "Ben Arous":
                                cas = tunis["Ben Arous"];
                          break;             
                          case "Gafsa":
                              cas = tunis["Gafsa, Tunisia"];
                        break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
            document.getElementById("cases").innerHTML=cas;
      })
  })
  .catch(err => {
   })


    }

  