ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_zinc_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_zinc_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_zinc",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/zinc"
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
        "tag": "forge:normal_zinc_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_zinc_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_zinc",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/zinc"
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
        "tag": "forge:rich_zinc_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_zinc_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_zinc",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/zinc"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
