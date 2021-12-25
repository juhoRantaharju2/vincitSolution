const downButton = document.getElementById("down");
const upButton = document.getElementById("up");
const timeMachineButton = document.getElementById("timeMachine");
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

    This is the down function for figuring out how many down days there are

    */

const down = () => {

    let startDate = new Date(start.value);
    let endDate = new Date(end.value);

    let startDateInUnix = Math.round(startDate.getTime() / 1000); 
    let endDateInUnix = Math.round(endDate.getTime() / 1000);

  
    let url =   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur" + "&from=" + startDateInUnix + "&to=" + endDateInUnix;  
  
    getData(url).then(data =>{

        logData(data);
        calculateDown(data);
        
    });

};

/*

    This is the up function for figuring out how many up days there are

    */

const up = () => {

    let startDate = new Date(start.value);
    let endDate = new Date(end.value);
    
    let startDateInUnix = Math.round(startDate.getTime() / 1000); 
    let endDateInUnix = Math.round(endDate.getTime() / 1000);
    
      
    let url =   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd" + "&from=" + startDateInUnix + "&to=" + endDateInUnix;  
      
    getData(url).then(data =>{
    
        logData(data);
        calculateUp(data);
            
    });
    
};

const timeMachineCal = () => {

    let startDate = new Date(start.value);
    let endDate = new Date(end.value);
    
    let startDateInUnix = Math.round(startDate.getTime() / 1000); 
    let endDateInUnix = Math.round(endDate.getTime() / 1000);
    
      
    let url =   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd" + "&from=" + startDateInUnix + "&to=" + endDateInUnix;  
      
    getData(url).then(data =>{
    
        logData(data);
        timeMachineCalc(data);
            
    });
    
};

upButton.addEventListener("click", up);
downButton.addEventListener("click", down);
timeMachineButton.addEventListener("click", timeMachineCal);
