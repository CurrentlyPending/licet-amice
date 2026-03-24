ServerEvents.recipes(event => {
  // === MEKANISM ORES AND CHEMS ===
  const oxygen = 'mekanism:oxygen'

  // === IG ORES AND THEIR MEKANISM OUTPUTS ===
  const ores = [
    { ore: 'thorianite', clump: 'moremekanismprocessing:clump_thorium' },
    { ore: 'thorite', clump: 'moremekanismprocessing:clump_thorium' },
	{ ore: 'copper', clump: 'mekanism:clump_copper' },
	{ ore: 'cuprite', clump: 'mekanism:clump_copper' },
	{ ore: 'chalcopyrite', clump: 'mekanism:clump_copper' },
	{ ore: 'chalcocite', clump: 'mekanism:clump_copper' },
	{ ore: 'chromite', clump: 'mekanism:clump_iron' },
	{ ore: 'ilmenite', clump: 'mekanism:clump_iron' },
	{ ore: 'hematite', clump: 'mekanism:clump_iron' },
	{ ore: 'magnetite', clump: 'mekanism:clump_iron' },
	{ ore: 'pyrolusite', clump: 'mekanism:clump_iron' },
	{ ore: 'wolframite', clump: 'mekanism:clump_iron' },
	{ ore: 'pyrite', clump: 'mekanism:clump_iron' },
	{ ore: 'bauxite', clump: 'moremekanismprocessing:clump_aluminum' },
	{ ore: 'alumina', clump: 'moremekanismprocessing:clump_aluminum' },
	{ ore: 'lead', clump: 'mekanism:clump_lead' },
	{ ore: 'vanadinite', clump: 'mekanism:clump_lead' },
	{ ore: 'galena', clump: 'mekanism:clump_lead' },
	{ ore: 'molybdenite', clump: 'mekanism:clump_osmium' },
	{ ore: 'uraninite', clump: 'mekanism:clump_uranium' },
	{ ore: 'gold', clump: 'mekanism:clump_gold' },
	{ ore: 'millerite', clump: 'moremekanismprocessing:clump_nickel' },
	{ ore: 'cobaltite', clump: 'moremekanismprocessing:clump_cobalt' },
	{ ore: 'silver', clump: 'moremekanismprocessing:clump_silver' },
	{ ore: 'acanthite', clump: 'moremekanismprocessing:clump_silver' },
	{ ore: 'platinum', clump: 'moremekanismprocessing:clump_platinum' },
	{ ore: 'unobtania', clump: 'moremekanismprocessing:clump_platinum' },
	{ ore: 'sphalerite', clump: 'moremekanismprocessing:clump_zinc' },
	{ ore: 'smithsonite', clump: 'moremekanismprocessing:clump_zinc' }
	
  ]

  // EQUIVALENCES
  const tiers = [
    { tier: 'poor',   amount: 3, clumpAmount: 3, gasAmount: 1 },
    { tier: 'normal', amount: 1, clumpAmount: 3, gasAmount: 1 },
    { tier: 'rich',   amount: 1, clumpAmount: 9, gasAmount: 3 }
  ]

  // Constructs a string out of each array,
  // then loops through each equivalence to create each individual recipe
  for (const ore of ores) {
    for (const tier of tiers) {
      let itemID = `immersivegeology:${tier.tier}_ore_${ore.ore}`

      event.recipes.mekanism.purifying(
        { item: ore.clump,   count: tier.clumpAmount },
		{ item: itemID, count: tier.amount },
		{ gas: oxygen,    amount: tier.gasAmount }
      )
    }
  }
})