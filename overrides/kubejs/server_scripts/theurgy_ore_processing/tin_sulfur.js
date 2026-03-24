ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore/cassiterite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/cassiterite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_tin",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/tin"
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
        "tag": "forge:normal_ore/cassiterite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/cassiterite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_tin",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/tin"
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
        "tag": "forge:rich_ore/cassiterite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/cassiterite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_tin",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/tin"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
