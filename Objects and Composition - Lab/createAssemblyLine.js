function createAssemblyLine() {

    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp =  () => {
                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                } else if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }
            };
        },
        hasAudio: (car) => {
            car.currentTrack = null;
            car.nowPlaying =  () => {
                if (car.currentTrack !== null) {
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },
        hasParktronic: (car) => {
            car.checkDistance =  (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance && distance < 0.5 ) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            };
        }

    }

}
