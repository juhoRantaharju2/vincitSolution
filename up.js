const calculateUp = (data) => {
    //console.log(data);

    let temp = 0, days, longestDayStreak = 0;

    for (let i = 0; i < data.prices.length; i++)  {
        
        if(temp != '' && temp > data.prices[i][1]) {
        
            days++;
    
        } else {

            days = 1;
        }

        temp = data.prices[i][1];

        if(days > longestDayStreak) {
            longestDayStreak = days;
        }
    
    }

    console.log(longestDayStreak);

};

