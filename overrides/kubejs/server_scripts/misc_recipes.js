ServerEvents.recipes(event => {
	event.remove({ output: 'farm_and_charm:dog_food_bag' }),
	event.shaped(Item.of('farm_and_charm:dog_food_bag', 1),
  [
    'AAA',
    'AAA',
    'AAA'
  ],
  {
    A: 'farmersdelight:dog_food'
  }
)
event.shaped(Item.of('alexscaves:block_of_uranium', 1),
  [
    'AAA',
    'AAA',
    'AAA'
  ],
  {
    A: 'alexscaves:uranium'
  }
)
event.shaped(Item.of('alexscaves:uranium', 1),
  [
    'AAA',
    'AAA',
    'AAA'
  ],
  {
    A: 'alexscaves:uranium_shard'
  }
)
event.blasting('2x theurgy:sal_ammoniac_crystal', 'immersivegeology:crushed_ore_zircon')
event.shapeless(
  Item.of('alexscaves:uranium_shard', 9),
  [
    'alexscaves:uranium'
  ]
)
event.shapeless(
  Item.of('alexscaves:uranium', 9),
  [
    'alexscaves:block_of_uranium'
  ]
)
event.shapeless(
  Item.of('alexscaves:sulfur_dust', 9),
  [
    'alexscaves:sulfur'
  ]
)
event.shapeless(
  Item.of('alexscaves:metal_swarf', 2),
  [
    'alexscaves:ferrouslime_ball',
	'#forge:crushed_iron_ores',
	Item.of('#forge:gravel', 2)
  ]
)
  event.shapeless(
  Item.of('irons_spellbooks:shriving_stone'),
  [
	'#forge:crushed_iron_ores',
	'minecraft:amethyst_shard'
  ]
)
event.custom({	
"type": "electrodynamics:chemical_mixer_recipe",
  "experience": 0.0,
  "fluidinputs": {
    "0": {
      "amount": 1000,
      "tag": "forge:sulfuric_acid"
    },
    "count": 1
  },
  "iteminputs": {
    "0": {
      "count": 1,
      "tag": "forge:gems/fluorite"
    },
    "count": 1
  },
  "output": {
    "amount": 1000,
    "fluid": "electrodynamics:fluidhydrofluoricacid"
  },
  "ticks": 200,
  "usagepertick": 400.0
})
event.custom({
  "type": "nuclearscience:msrfuel_preprocessor_recipe",
  "experience": 0.0,
  "fluidinputs": {
    "0": {
      "amount": 2500,
      "tag": "forge:hydrofluoric_acid"
    },
    "count": 1
  },
  "iteminputs": {
    "0": {
      "count": 1,
      "tag": "forge:dusts/lithium"
    },
    "1": {
      "count": 2,
      "tag": "forge:metal_oxide/thorium"
    },
    "2": {
      "count": 2,
      "tag": "forge:yellow_cake_uranium"
    },
    "count": 3
  },
  "output": {
    "count": 1,
    "item": "nuclearscience:lifthf4uf4"
  },
  "ticks": 200,
  "usagepertick": 1200.0
})
event.custom({
	"type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/iron"
    },
    {
      "tag": "embers:aspectus/dawnstone"
    }
  ],
  "inputs": [
    {
      "tag": "forge:ingots/platinum"
	},
    {
      "tag": "forge:ingots/platinum"
    },
    {
      "tag": "forge:ingots/platinum"
    }
  ],
  "output": {
    "item": "embers:platinum_crystal_seed"
  },
  "tablet": {
    "tag": "embers:crystal_seeds"
  }
})
event.custom({
	"type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/iron"
    },
    {
      "tag": "embers:aspectus/silver"
    }
  ],
  "inputs": [
    {
      "tag": "forge:ingots/uranium"
	},
    {
      "tag": "forge:ingots/uranium"
    },
    {
      "tag": "forge:ingots/uranium"
    }
  ],
  "output": {
    "item": "embers:uranium_crystal_seed"
  },
  "tablet": {
    "tag": "embers:crystal_seeds"
  }
})
event.custom({
	"type": "embers:alchemy",
  "aspects": [
    {
      "tag": "embers:aspectus/iron"
    },
    {
      "tag": "embers:aspectus/dawnstone"
    }
  ],
  "inputs": [
    {
      "tag": "forge:storage_blocks/dawnstone"
	},
    {
      "tag": "forge:storage_blocks/dawnstone"
    },
    {
      "tag": "forge:storage_blocks/dawnstone"
    }
  ],
  "output": {
    "item": "embers:dawnstone_crystal_seed"
  },
  "tablet": {
    "tag": "embers:crystal_seeds"
  }
})
event.recipes.mekanism.purifying(
{ item: 'mekanism:fluorite_gem', count: 2 },
{ item: 'immersivegeology:crushed_ore_fluorite', count: 1 },
{ gas: 'mekanism:oxygen', amount: 1 }
)
})