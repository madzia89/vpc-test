// code logic & console program

class Warrior {
    constructor(name, _X, _Y) {
        this.name = '';
        this.life = 100;
        this.imDead = false;
        this.position = {
            X:_X,
            Y:_Y
        }
    }
    goTo(_X,_Y){
        // warrior walks 0,1 unit per step
    }
    attackAnotherWarrior(/* some args */){
        // --10 life unit
    }
}

class Legion {
    constructor (name, basePosition={X:0,Y:0}){
        this.name = '';

       
        this.legionPosition = {
            X:_X,
            Y:_Y
        } // == center warrior


        this.warriors = []
    }

    setFormationOnPosition(/* some args */){

    }
}

// make class Warrior with name, 
// position = {X,Y} and goTo(X,Y) with +/-0.1 unit for each step (interval 1sec)

// make class Legion with 9 Warriors inside, 
// and make function for Legion (setFormationOnPosition)
// to help warriors walk together in square formation


// on test 

// warrior have to kill another warrior

// legion should go from point 0,0 to point 9,41 in square formation
// with 2 units distance between closest warriors 
// and log position for any warrior for each 10 step if legion are walking
