const calculateUp = (data) => {
    //console.log(data);

    let maxVolume = 0, maxVolumeDay = 0;

    for (let i = 0; i < data.total_volumes.length; i++)  {
        
        maxVolume = Math.max(maxVolume, data.total_volumes[i][1])
        
        if (data.total_volumes[i][1] === maxVolume)
            maxVolumeDay = data.total_volumes[i][0];
    
    }

    let maxVolumeDate = new Date(maxVolumeDay * 1000); 


    document.getElementById("testLabel").innerHTML = 'The highest trading volume was in ' + maxVolumeDate + '. The volume on that day was ' + maxVolume + ' in euros.';
    document.getElementById("testsLabel").innerHTML = ' ';
};