/*Class to simulate biosensor - Generate a heart beat randomly for a person
  and display in console */
class Biosensor{
    constructor(personName){
        this.person=personName;
        this.heartBeatRate=0;
        this.live();
        this.config={
            minRate:60,
            maxRate:80
        }
    }
   // Generate a random number between a given range
    generateRandomNumberBetween(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    displayResult(){
        console.log(this.person+' Heartbeat = '+this.heartBeatRate)
    }

    generatePersonHeartBeat(){
        this.heartBeatRate=this.generateRandomNumberBetween(this.config.minRate,this.config.maxRate);
        this.displayResult();
    }

    // live function to generate heart beat every second
    live(){
        setInterval(()=>{this.generatePersonHeartBeat()},1000);
    }

}

let james=new Biosensor('james');
let sarah=new Biosensor('sarah')