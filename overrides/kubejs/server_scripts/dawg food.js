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
})
