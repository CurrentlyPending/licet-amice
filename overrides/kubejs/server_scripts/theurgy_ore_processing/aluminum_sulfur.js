ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_aluminum_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_aluminum_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_aluminum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:raw_materials/aluminum"
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
        "tag": "forge:normal_aluminum_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_aluminum_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_aluminum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:raw_materials/aluminum"
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
        "tag": "forge:rich_aluminum_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_aluminum_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_aluminum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:raw_materials/aluminum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
