const logData = (data) => {
    console.log(data);
};

const calculateDown = (data) => {
    //console.log(data);

    let i,
    temp = 0,
    streak,
    length = data.prices.length,
    highestStreak = 0;

for(i = 0; i < length; i++) {
    // check the value of the current entry against the last
    if(temp != '' && temp < data.prices[i][1]) {
        // it's a match
        streak++;
    } else {
        // it's not a match, start streak from 1
        streak = 1;
    }

    // set current letter for next time
    temp = data.prices[i][1];

    // set the master streak var
    if(streak > highestStreak) {
        highestStreak = streak;
    }

    console.log(highestStreak);
}
};

