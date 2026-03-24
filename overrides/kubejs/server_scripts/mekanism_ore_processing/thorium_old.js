/*ServerEvents.recipes(event => {

    // ===== IG ORES =====
    //const poorThorium = 'forge:poor_thorium_ores'
    //const normalThorium = 'forge:normal_thorium_ores'
    //const richThorium = 'forge:rich_thorium_ores'
    
    // ===== NON-IG ORES AND CHEMS =====
    const dirtyThorium = 'moremekanismprocessing:dirty_thorium'
    const sulfuricAcid = 'mekanism:sulfuric_acid'
	const hydrogenChloride = 'mekanism:hydrogen_chloride'
	const oxygen = 'mekanism:oxygen'
	const thoriumShard = 'moremekanismprocessing:thorium_shard'
	const thoriumClump = 'moremekanismprocessing:thorium_clump'
	const thoriumDust = 'moremekanismprocessing:thorium_dust'
    
    // ===== CHEMICAL DISSOLUTION CHAMBER =====
    
    // 3 Poor = 1 Raw equivalent
    event.recipes.mekanism.dissolution(
        { slurry: dirtyThorium, amount: 1000 },
        { gas: sulfuricAcid, amount: 1 },
		{ item: 'forge:poor_thorium_ores', count: 3 }
    )
    
    // 1 Regular = 1 Raw equivalent
    event.recipes.mekanism.dissolution(
        { slurry: dirtyThorium, amount: 1000 },
        { gas: sulfuricAcid, amount: 1 },
        Ingredient.of(normalThorium)
    )
    
    // 1 Rich = 3 Raw equivalent
    event.recipes.mekanism.dissolution(
        { slurry: dirtyThorium, amount: 3000 },
        { gas: sulfuricAcid, amount: 3 },
        Ingredient.of(richThorium)
    )
	
	event.recipes.mekanism.injecting(
		{ item: thoriumShard, count: 4},
		{ item: poorThorium, count: 3},
		{ gas: hydrogenChloride, amount: 1}
	)
	
	event.recipes.mekanism.injecting(
		{ item: thoriumShard, count: 4},
		{ item: normalThorium, count: 1},
		{ gas: hydrogenChloride, amount: 1}
	)
	
	event.recipes.mekanism.injecting(
		{ item: thoriumShard, count: 12},
		{ item: richThorium, count: 1},
		{ gas: hydrogenChloride, amount: 3}
	)
	
	event.recipes.mekanism.purifying(
		{ item: thoriumClump, count: 3},
		{ item: poorThorium, count: 3},
		{ gas: oxygen, amount: 1}
	)
	
	event.recipes.mekanism.purifying(
		{ item: thoriumClump, count: 3},
		{ item: normalThorium, count: 1},
		{ gas: oxygen, amount: 1}
	)
	
	event.recipes.mekanism.purifying(
		{ item: thoriumClump, count: 9},
		{ item: richThorium, count: 1},
		{ gas: oxygen, amount: 3}
	)
	
	event.recipes.mekanism.enriching(
		{ item: thoriumDust, count: 2},
		{ item: poorThorium, count: 3}
	)
	
	event.recipes.mekanism.enriching(
		{ item: thoriumDust, count: 2},
		{ item: normalThorium, count: 1}
	)
	
	event.recipes.mekanism.enriching(
		{ item: thoriumDust, count: 6},
		{ item: richThorium, count: 1}
	)
})
// THANK YOU MOSS I LOVE YOU I WILL GIVE YOU SOME FANTASTIC HEAD ONE OF THESE DAYS
// UPDATE ON THE HEAD SITUATION YOU'RE GETTING SOMETHING OUT OF THIS WORLD FOR THE HELP WITH THE FLUORITE
*/