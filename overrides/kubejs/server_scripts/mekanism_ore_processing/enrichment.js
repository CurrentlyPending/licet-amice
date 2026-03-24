ServerEvents.recipes(event => {
  // === IG ORES AND THEIR MEKANISM OUTPUTS ===
  const ores = [
    { ore: 'thorianite', dust: 'moremekanismprocessing:dust_thorium' },
    { ore: 'thorite', dust: 'moremekanismprocessing:dust_thorium' },
	{ ore: 'copper', dust: 'immersiveengineering:dust_copper' },
	{ ore: 'cuprite', dust: 'immersiveengineering:dust_copper' },
	{ ore: 'chalcopyrite', dust: 'immersiveengineering:dust_copper' },
	{ ore: 'chalcocite', dust: 'immersiveengineering:dust_copper' },
	{ ore: 'chromite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'ilmenite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'hematite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'magnetite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'pyrolusite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'wolframite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'pyrite', dust: 'immersiveengineering:dust_iron' },
	{ ore: 'bauxite', dust: 'immersiveengineering:dust_aluminum' },
	{ ore: 'alumina', dust: 'immersiveengineering:dust_aluminum' },
	{ ore: 'lead', dust: 'immersiveengineering:dust_lead' },
	{ ore: 'vanadinite', dust: 'immersiveengineering:dust_lead' },
	{ ore: 'galena', dust: 'immersiveengineering:dust_lead' },
	{ ore: 'molybdenite', dust: 'immersiveengineering:dust_osmium' },
	{ ore: 'uraninite', dust: 'immersiveengineering:dust_uranium' },
	{ ore: 'gold', dust: 'immersiveengineering:dust_gold' },
	{ ore: 'millerite', dust: 'immersiveengineering:dust_nickel' },
	{ ore: 'cobaltite', dust: 'moremekanismprocessing:dust_cobalt' },
	{ ore: 'silver', dust: 'immersiveengineering:dust_silver' },
	{ ore: 'acanthite', dust: 'immersiveengineering:dust_silver' },
	{ ore: 'platinum', dust: 'moremekanismprocessing:dust_platinum' },
	{ ore: 'unobtania', dust: 'moremekanismprocessing:dust_platinum' },
	{ ore: 'sphalerite', dust: 'moremekanismprocessing:dust_zinc' },
	{ ore: 'smithsonite', dust: 'moremekanismprocessing:dust_zinc' }
	
  ]

  // EQUIVALENCES
  const tiers = [
    { tier: 'poor',   amount: 3, dustAmount: 2},
    { tier: 'normal', amount: 1, dustAmount: 2},
    { tier: 'rich',   amount: 1, dustAmount: 6}
  ]

  // Constructs a string out of each array,
  // then loops through each equivalence to create each individual recipe
  for (const ore of ores) {
    for (const tier of tiers) {
      let itemID = `immersivegeology:${tier.tier}_ore_${ore.ore}`

      event.recipes.mekanism.enriching(
        { item: ore.dust,   count: tier.dustAmount },
        { item: itemID, count: tier.amount }
      )
    }
  }
})