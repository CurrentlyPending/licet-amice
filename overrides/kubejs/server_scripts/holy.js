// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Arquivo example.js

ServerEvents.recipes(whatthehell => {

    console.log('Hello! The recipe event has fired!')

    // got ts from chatgpt LMFAAOOOOOO I hope it doesn't explode

    whatthehell.shapeless(
  Item.of('minecraft:end_stone', 2), // arg 1: output
  [
    'minecraft:cobblestone',
    'minecraft:diorite', 	       // arg 2: the array of inputs
    'minecraft:white_dye',
    'minecraft:yellow_dye'
  ]
)

})
