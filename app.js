const submitButton = document.getElementById("down");
const start = document.getElementById("start");
const end = document.getElementById("end");

/*
    This function will get the data from the coingecko API to be used later

    */

async function getData(url){

    const response = await fetch(url);
    let data = await response.json();

    return data;
}

/*

    This is the main function that handles user input and data

    */

//function logi() {
const logi = () => {
    let startDate = new Date(start.value);
    let endDate = new Date(end.value);

	//console.log("text");
  //console.log(response);
    //console.log(start.value);
  //startDate = start.value;
    //console.log(startDate.getDate());
    //console.log(endDate.getDate());
  
    let startDateInUnix = Math.round(startDate.getTime() / 1000); 
    let endDateInUnix = Math.round(endDate.getTime() / 1000);
  
    //console.log(startDateInUnix);
    //console.log(endDateInUnix);
  
    let url =   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd" + "&from=" + startDateInUnix + "&to=" + endDateInUnix;  
  
    getData(url).then(data =>{

        logData(data);
        calculateDown(data);
 
        
    });
  
  //console.log(startDate.getMilliseconds());

};

submitButton.addEventListener("click", logi);
