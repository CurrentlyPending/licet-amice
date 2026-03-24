ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "item": "immersivegeology:poor_ore_molybdenite"
      }
    }
  ],
  "ingredient": {
    "item": "immersivegeology:poor_ore_molybdenite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_osmium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:raw_materials/osmium"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "item": "immersivegeology:normal_ore_molybdenite"
      }
    }
  ],
  "ingredient": {
    "item": "immersivegeology:normal_ore_molybdenite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_osmium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:raw_materials/osmium"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "item": "immersivegeology:rich_ore_molybdenite"
      }
    }
  ],
  "ingredient": {
    "item": "immersivegeology:rich_ore_molybdenite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_osmium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:raw_materials/osmium"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
