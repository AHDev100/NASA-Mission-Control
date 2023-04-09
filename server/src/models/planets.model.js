const { parse } = require('csv-parse'); 
const fs = require('fs');
const path = require('path');

const planets = []; //Array of habitable planets 

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6; 
    //Checks the stellar flux and planet radius properties of the planet to determine inhabitability
}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'src', 'data', 'data.csv'))
            .pipe(parse({
                comment: '#', 
                columns: true, 
            }))
            .on('data', (data)=>{  
                if (isHabitablePlanet(data)){
                    planets.push(data); 
                }
            })
            .on('error', (err)=>{
                console.log(err); 
                reject(err);
            })
            .on('end', () => { 
                console.log(`${planets.length} habitable planets were found!`)
                resolve();
            });
        }
    )
}

module.exports = {
    planets, 
    loadPlanetsData,
}; 