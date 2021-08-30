onEvent('recipes', e => {
  function upgrade(material, previous, next) {
    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XXX', 'XYX'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_helmet` }
      },
      result: { item: `${next}_helmet` }
    }).id(`kubejs:${previous.replace(`:`, `_`)}_helmet_upgrade`)

    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XYX', 'XXX', 'XXX'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_chestplate` }
      },
      result: { item: `${next}_chestplate` }
    }).id(`kubejs:${previous.replace(`:`, `_`)}_chestplate_upgrade`)

    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XXX', 'XYX', 'X X'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_leggings` }
      },
      result: { item: `${next}_leggings` }
    }).id(`kubejs:${previous.replace(`:`, `_`)}_leggings_upgrade`)

    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XYX', 'X X'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_boots` }
      },
      result: { item: `${next}_boots` }
    }).id(`kubejs:${previous.replace(`:`, `_`)}_boots_upgrade`)
  }

  upgrade('ingots/iron', 'minecraft:leather', 'minecraft:iron')
  upgrade('gems/diamond', 'minecraft:iron', 'minecraft:diamond')
  upgrade('ingots/allthemodium', 'minecraft:netherite', 'allthemodium:allthemodium')
})
