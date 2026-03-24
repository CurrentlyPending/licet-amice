ServerEvents.recipes(event => {
  // MOSS I WILL GENUINELY BEAR YOUR CHILDREN
  // === MEKANISM ORES AND CHEMS ===
  const sulfuricAcid = 'mekanism:sulfuric_acid'

  // === IG ORES AND THEIR MEKANISM OUTPUTS ===
  const ores = [
    { ore: 'thorianite', slurry: 'moremekanismprocessing:dirty_thorium' },
    { ore: 'thorite', slurry: 'moremekanismprocessing:dirty_thorium' },
	{ ore: 'copper', slurry: 'mekanism:dirty_copper' },
	{ ore: 'cuprite', slurry: 'mekanism:dirty_copper' },
	{ ore: 'chalcopyrite', slurry: 'mekanism:dirty_copper' },
	{ ore: 'chalcocite', slurry: 'mekanism:dirty_copper' },
	{ ore: 'chromite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'ilmenite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'hematite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'magnetite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'pyrolusite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'wolframite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'pyrite', slurry: 'mekanism:dirty_iron' },
	{ ore: 'bauxite', slurry: 'moremekanismprocessing:dirty_aluminum' },
	{ ore: 'alumina', slurry: 'moremekanismprocessing:dirty_aluminum' },
	{ ore: 'lead', slurry: 'mekanism:dirty_lead' },
	{ ore: 'vanadinite', slurry: 'mekanism:dirty_lead' },
	{ ore: 'galena', slurry: 'mekanism:dirty_lead' },
	{ ore: 'molybdenite', slurry: 'mekanism:dirty_osmium' },
	{ ore: 'uraninite', slurry: 'mekanism:dirty_uranium' },
	{ ore: 'gold', slurry: 'mekanism:dirty_gold' },
	{ ore: 'millerite', slurry: 'moremekanismprocessing:dirty_nickel' },
	{ ore: 'cobaltite', slurry: 'moremekanismprocessing:dirty_cobalt' },
	{ ore: 'silver', slurry: 'moremekanismprocessing:dirty_silver' },
	{ ore: 'acanthite', slurry: 'moremekanismprocessing:dirty_silver' },
	{ ore: 'platinum', slurry: 'moremekanismprocessing:dirty_platinum' },
	{ ore: 'unobtania', slurry: 'moremekanismprocessing:dirty_platinum' },
	{ ore: 'sphalerite', slurry: 'moremekanismprocessing:dirty_zinc' },
	{ ore: 'smithsonite', slurry: 'moremekanismprocessing:dirty_zinc' }
	
  ]

  // EQUIVALENCES
  const tiers = [
    { tier: 'poor',   amount: 3, slurryAmount: 1000, gasAmount: 1 },
    { tier: 'normal', amount: 1, slurryAmount: 1000, gasAmount: 1 },
    { tier: 'rich',   amount: 1, slurryAmount: 3000, gasAmount: 3 }
  ]

  // Constructs a string out of each array,
  // then loops through each equivalence to create each individual recipe
  for (const ore of ores) {
    for (const tier of tiers) {
      let itemID = `immersivegeology:${tier.tier}_ore_${ore.ore}`

      event.recipes.mekanism.dissolution(
        { slurry: ore.slurry,   amount: tier.slurryAmount },
        { gas: sulfuricAcid,    amount: tier.gasAmount },
        Ingredient.of(itemID,   tier.amount)
      )
    }
  }
})