//Example for object oriented programming (POO) - Steeve Henrard


//We create a class for our Player (it's generic, all player have the same life, child and number of attack)
class Player{ // We have juste to create the class with 'class' before the name of the class
    constructor(name, life, child, nbsort){ //Each class have a constructor element
        this.name= name; 
        this.life= life;
        this.child= child;
        this.sort= nbsort;
    }
    start(){ // generic function, all the player have to start the game! 
        return console.log(this.name + " : La partie vient de commencer");
    }
}

class Sorcier extends Player{ // Now, each player can choose different character, so we create a new class for each character and 'extends' this to the generic class 'Player'
    constructor(name,life,child,nbsort){
        super(name, 100, 0, 10); // 'super' for link the constructor with the parent
    }

    Avadakedavra(){ // function for the character 'Sorcier'
        return console.log(this.name + " : You're dead.");
    }

    PetrificusTotalus(){ // another function for the character 'Sorcier'
        return console.log(this.name + " : You're petrified.");
    }
}

class Guerrier extends Player{ // Another character
    constructor(name, life,child,nbsort){
        super(name, 100, 0, 10);
    }

    Destin(){ // function for the character Guerrier (remind, 'Guerrier' can't use the fonction 'Avadakedavra' of the 'Sorcier')
        return console.log(this.name+ " : Vous vous engagez dans un combat sans lendemain...");
    }

    Colere(){
        return console.log(this.name + " : Votre adversaire s'est endormi.");
    }
}

//We instanciate the character with 'let variable= new ...();'
let player1= new Sorcier("Harry Potter");
let player2= new Guerrier("Mulan");

//We can start the game for both players
player1.start();
player2.start();


player1.Avadakedavra();//Work
player2.Destin();// Work

// player2.Avadakedavra(); DOESN'T WORK, player2 isn't a 'Sorcier';
