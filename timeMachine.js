const timeMachineCalc = (data) => {

    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    let minDay = Number.POSITIVE_INFINITY;
    let maxDay = 0;

    for (i = 0, l =  data.prices.length; i < l; i++) {
        max = Math.max(max, data.prices[i][1])
        
        if (data.prices[i][1] === max)
            maxDay = data.prices[i][0];

      }

    for (i = 0, l =  data.prices.length; i < l; i++) {
        
        min = Math.min(min, data.prices[i][1])
        if (data.prices[i][1] === min)
             minDay = data.prices[i][0];


      }

    let minDate = new Date(minDay * 1000);
    let maxDate = new Date(maxDay * 1000);  

    document.getElementById("testLabel").innerHTML = 'The best day to go to for buying is: ' + minDate;
    
    document.getElementById("testsLabel").innerHTML = 'The best day to go to for selling is: ' + maxDate;

};