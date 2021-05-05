var RSgoesREALFLAM = ["Work that ass, playa!",
                "O don't be a nosy girlfriend, honey buns, I'll eat you for breakfast and burn the calories RIGHT OFF!",
                "Dip it, suck, and work it!", "We'd all love a fluffy raccoon hotcakes, but we all end up getting a naked mole rat for our hanukkah!",
                "Cigar store Indian isn't meant to be racist, hun. In fact, it means I want to exercise with you in bed tonight!", 
                "Moan for me you little bitch!",
                "Your ass is finer than a century-old, once lost but now found keg of wine reserved for the Pope!", 
                "I want to kiss you on the lips of your tongOOOOOOOOOue!",
                `Don't be such a homo sapien!`, 
                "I want to tap that ass like it's match point in EVO Street Fighter tournament grand finals and I need one more punch input to win it all!"];



var personalityChoice = console.prompt(`Please enter a number alone for which Richard Simmons you want: 
                                1. Flamboyant
                                2. Flustered
                                3. Angry
                                4. Inappropriately jubilant
                                5. Very very very gay
                                6. Sad
                                7. Drunk
                                8. Cocained up`, Math.floor(Math.random()*9));

    if(personalityChoice === '1'){}
        var RSflam = (input)=> {
            if(input === '1'){
            for (i in RSgoesREALFLAM){
            randomizer = Math.floor(Math.random(RSgoesREALFLAM.length))
            return RSgoesREALFLAM[i*randomizer]
        }
    }
}
console.log(RSflam)