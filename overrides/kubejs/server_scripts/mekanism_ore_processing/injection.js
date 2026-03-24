ServerEvents.recipes(event => {
  // === MEKANISM ORES AND CHEMS ===
  const hydrogenChloride = 'mekanism:hydrogen_chloride'

  // === IG ORES AND THEIR MEKANISM OUTPUTS ===
  const ores = [
    { ore: 'thorianite', shard: 'moremekanismprocessing:shard_thorium' },
    { ore: 'thorite', shard: 'moremekanismprocessing:shard_thorium' },
	{ ore: 'copper', shard: 'mekanism:shard_copper' },
	{ ore: 'cuprite', shard: 'mekanism:shard_copper' },
	{ ore: 'chalcopyrite', shard: 'mekanism:shard_copper' },
	{ ore: 'chalcocite', shard: 'mekanism:shard_copper' },
	{ ore: 'chromite', shard: 'mekanism:shard_iron' },
	{ ore: 'ilmenite', shard: 'mekanism:shard_iron' },
	{ ore: 'hematite', shard: 'mekanism:shard_iron' },
	{ ore: 'magnetite', shard: 'mekanism:shard_iron' },
	{ ore: 'pyrolusite', shard: 'mekanism:shard_iron' },
	{ ore: 'wolframite', shard: 'mekanism:shard_iron' },
	{ ore: 'pyrite', shard: 'mekanism:shard_iron' },
	{ ore: 'bauxite', shard: 'moremekanismprocessing:shard_aluminum' },
	{ ore: 'alumina', shard: 'moremekanismprocessing:shard_aluminum' },
	{ ore: 'lead', shard: 'mekanism:shard_lead' },
	{ ore: 'vanadinite', shard: 'mekanism:shard_lead' },
	{ ore: 'galena', shard: 'mekanism:shard_lead' },
	{ ore: 'molybdenite', shard: 'mekanism:shard_osmium' },
	{ ore: 'uraninite', shard: 'mekanism:shard_uranium' },
	{ ore: 'gold', shard: 'mekanism:shard_gold' },
	{ ore: 'millerite', shard: 'moremekanismprocessing:shard_nickel' },
	{ ore: 'cobaltite', shard: 'moremekanismprocessing:shard_cobalt' },
	{ ore: 'silver', shard: 'moremekanismprocessing:shard_silver' },
	{ ore: 'acanthite', shard: 'moremekanismprocessing:shard_silver' },
	{ ore: 'platinum', shard: 'moremekanismprocessing:shard_platinum' },
	{ ore: 'unobtania', shard: 'moremekanismprocessing:shard_platinum' },
	{ ore: 'sphalerite', shard: 'moremekanismprocessing:shard_zinc' },
	{ ore: 'smithsonite', shard: 'moremekanismprocessing:shard_zinc' }
	
  ]

  // EQUIVALENCES
  const tiers = [
    { tier: 'poor',   amount: 3, shardAmount: 4, gasAmount: 1 },
    { tier: 'normal', amount: 1, shardAmount: 4, gasAmount: 1 },
    { tier: 'rich',   amount: 1, shardAmount: 12, gasAmount: 3 }
  ]

  // Constructs a string out of each array,
  // then loops through each equivalence to create each individual recipe
  for (const ore of ores) {
    for (const tier of tiers) {
      let itemID = `immersivegeology:${tier.tier}_ore_${ore.ore}`

      event.recipes.mekanism.injecting(
        { item: ore.shard,   count: tier.shardAmount },
		{ item: itemID, count: tier.amount },
		{ gas: hydrogenChloride,    amount: tier.gasAmount }
      )
    }
  }
})