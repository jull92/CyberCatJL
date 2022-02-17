let hungerButton = document.getElementById(`hungerButton`);
let thirstButton = document.getElementById(`thirstButton`);
let playButton = document.getElementById(`playButton`);
let petButton = document.getElementById(`petButton`);

let hungerLevel = document.getElementById(`hungerLevel`);
let thirstLevel = document.getElementById(`thirstLevel`);
let playLevel = document.getElementById(`playLevel`);
let petLevel = document.getElementById(`petLevel`);

let petName = document.getElementById(`petName`).value;
let petCreate = document.getElementById(`createPet`).value;


petCreate.addEventListener(`click`, () =>{
    console.log(petName)
});

hungerButton.addEventListener(`click`, () =>{
    console.log(petName.hungerLevel);
    if (petName.playLevel <= 0 || thirstLevel <= 0){
        alert(`Your cat has died of hunger`);
        location.reload();    
    } else if (petName.hungerLevel >= 60){
        console.log(`Your cat has had enough food`);
        alert(`Your kitty is stuffed and doesn't want any more food`);
    } else {
        petName.petHunger();
        stats();
    }
});

thirstButton.addEventListener(`click`, () =>{
    console.log(petName.thirstLevel);
    if (petName.thirstLevel < 1 || petName.hungerLevel < 1){
        alert(`Your cat has died of thirst`);
        location.reload();
    } else if (petName.thirstLevel >= 60){
        console.log(`Your kitty has had enough water`);
        alert(`Your catto is no longer thirsty and doesn't want any more water`);
    } else {
        petName.petThirst();
        stats();
    }
});

playButton.addEventListener(`click`, () =>{
    console.log(petName.playLevel);
    if (petName.playLevel < 1 || petName.thirstLevel < 1){
        alert(`Your catto has died of a heart attack)`);
        location.reload();
    } else if (petName.playLevel >= 60){
        console.log(`Your catto is tired`);
        alert(`Your kitty is extreamly tired and wants to rest`)
    } else {
        petName.petPlay();
        stats();
    }
});

petButton.addEventListener(`click`, () =>{
    console.log(petName.petLevel);
    if (petName.playLevel < 1 || petName.thirstLevel < 1){
        alert(`Your cat has left you because of neglect`);
        location.reload();
    } else if (playLevel >= 60){
        console.log(`Your catto needs some alone time`);
        alert(`Your kitty really needs some alone time`)
    } else {
        petName.petPet();
        stats();
    }
});



let stats = () =>{
    playLevel.innerHTML = petName.playLevel
    hungerLevel.innerHTML = petName.hungerLevel
    thirstLevel.innerHTML = petName.thirstLevel
    petLevel.innerHTML = petName.petLevel
};


class Cat {
    constructor(petName) {
        this._petName = petName
        this._hungerLevel = 50;
        this._thirstLevel = 50;
        this._playLevel = 50;
        this._petLevel = 50;
    }
        get getName(){
            return this._petName;
        };
        get getHunger(){
            return this._hungerLevel;
        };
        get getThirst(){
            return this._thirstLevel;
        };
        get getPlay(){
            return this._playLevel;
        };
        get getPet(){
            return this._petLevel;
        };
            petPlay(){
                this._playLevel += 3;
                this._thirstLevel -= 3;
                this._hungerLevel -= 5;
                this._petPet -=3;
            };
            petHunger(){
                this._hungerLevel += 2;
                this._thirstLevel -= 5;
                this._petPlay -= 2;
                this._petPet -=1;
            };
            petThirst(){
                this._thirstLevel++;
                this._hungerLevel -= 2;
                this._playLevel -= 1;
                this._petPet -=1;
            };
            petPet(){
                this._petLevel++;
                this._playLevel-= 3;
                this._hungerLevel-= 2;
                this._thirstLevel-= 2;
            }
};
