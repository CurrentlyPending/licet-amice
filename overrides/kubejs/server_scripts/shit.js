// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Arquivo example.js

ServerEvents.recipes(whatthehelly => {

    console.log('Hello! The recipe event has fired!')

    // got ts from chatgpt LMFAAOOOOOO I hope it doesn't explode

    whatthehelly.shapeless(
  Item.of('minecraft:chorus_flower', 2), // arg 1: output
  [
    'minecraft:bone_meal',
    'minecraft:purple_dye', 	       // arg 2: the array of inputs
    'minecraft:ender_pearl',
    'minecraft:hay_block'
  ]
)

})
