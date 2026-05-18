ServerEvents.tags('item', event => {
	//Moss you're the goat fr
    // Hardcoded Array
    const tiers = ['poor', 'normal', 'rich']

    // Tag is the target forge item tag,
    // Ores is an array specifies which ores are gonna be associated with the target tag
    const metals = [
        { tag: 'iron_ores',    ores: ['chromite', 'ilmenite', 'hematite', 'magnetite', 'pyrolusite', 'wolframite', 'pyrite'] },
        { tag: 'copper_ores',  ores: ['copper', 'cuprite', 'chalcopyrite', 'chalcocite'] },
        { tag: 'aluminum_ores', ores: ['bauxite', 'alumina'] },
        { tag: 'lead_ores',    ores: ['lead', 'vanadinite', 'galena'] },
        { tag: 'silver_ores',  ores: ['silver', 'acanthite'] },
        { tag: 'platinum_ores', ores: ['platinum', 'unobtania'] },
        { tag: 'zinc_ores',    ores: ['smithsonite', 'sphalerite'] }
    ]

    // Crushed is iron-only, so it gets its own hardcoded line
    event.add('forge:crushed_iron_ores', metals[0].ores.map(ore => `immersivegeology:crushed_ore_${ore}`))

    // Loops through the arrays to map ores to a tag
    for (const metal of metals) {
        for (const tier of tiers) {
            event.add(
                `forge:${tier}_${metal.tag}`,
                metal.ores.map(ore => `immersivegeology:${tier}_ore_${ore}`)
            )
        }
    }
})
