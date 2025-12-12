// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Arquivo example.js

ServerEvents.recipes(event => {

    console.log('Hello! The recipe event has fired!')

    // got ts from chatgpt LMFAAOOOOOO I hope it doesn't explode

    event.shaped(
        Item.of('minecraft:elytra'), // <-- that's the crafting result btw
        [
            'ABA',
            'A A',
            'A A'
        ],
        {
            A: 'minecraft:phantom_membrane',          // and here are the uhh the. items needed for the recipe sorry i forgot the word for a sec
            B: 'minecraft:string'
        }
    )

})
